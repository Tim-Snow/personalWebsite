import { useState, useEffect } from 'react';

import useHttpRequest from 'hooks/useHttpRequest';

const PROFILE_ENDPOINT = 'https://api.github.com/users/tim-snow';

const defaultInfo = {
  name: 'Tim Snow',
  bio: 'Developer',
  location: 'England',
  blog: 'http://timsnow.dev',
  // eslint-disable-next-line @typescript-eslint/camelcase
  avatar_url: '',
};

type Info = typeof defaultInfo;
type ProfileState = 'load' | 'load image' | 'end' | 'ko';

function cleanInfo(info: Info) {
  return { ...info, bio: info.bio.replace('.', ''), location: `Isolating in ${info.location}` };
}

export default function useProfile() {
  const [state, setState] = useState<{
    state: ProfileState;
    info: Info;
    image: null | string;
  }>({
    state: 'load',
    info: defaultInfo,
    image: null,
  });
  const { res: info, state: infoState } = useHttpRequest<Info>(PROFILE_ENDPOINT);
  const { res: image, state: imageState, setUrl } = useHttpRequest(undefined, {
    blob: true,
    noAuth: true,
  });

  useEffect(() => {
    if (infoState === 'ok' && info !== undefined) {
      setUrl(info.avatar_url);
      setState((prev) => ({
        ...prev,
        state: 'load image',
        info: cleanInfo(info),
      }));
    }
    if (infoState === 'ko') {
      setState((prev) => ({ ...prev, state: 'ko' }));
    }
  }, [info, infoState, setUrl]);

  useEffect(() => {
    if (imageState === 'ok') {
      setState((prev) => ({
        ...prev,
        state: 'end',
        image: URL.createObjectURL(image),
      }));
    }
    if (imageState === 'ko') {
      setState((prev) => ({ ...prev, state: 'ko' }));
    }
  }, [image, imageState]);

  return state;
}
