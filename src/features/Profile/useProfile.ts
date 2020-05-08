import { useState, useEffect } from 'react';

import useFetch from 'hooks/useFetch';
import { BaseApiType, BaseApiState } from 'types/api';
import { API_BASE } from 'constants/index';

const defaultInfo = {
  name: 'Tim Snow',
  bio: 'Developer',
  location: 'England',
  blog: 'http://timsnow.dev',
  // eslint-disable-next-line @typescript-eslint/camelcase
  avatar_url: '',
};

type Info = typeof defaultInfo;
export const LOAD_IMAGE = 'LOAD_IMAGE';
type ProfileState = typeof LOAD_IMAGE | BaseApiType;

function cleanInfo(info: Info) {
  return { ...info, bio: info.bio.replace('.', ''), location: `Isolating in ${info.location}` };
}

export default function useProfile() {
  const [state, setState] = useState<{
    state: ProfileState;
    info: Info;
    image: null | string;
  }>({
    state: BaseApiState.LOAD,
    info: defaultInfo,
    image: null,
  });
  const { res: info, state: infoState } = useFetch<Info>(API_BASE);
  const { res: image, state: imageState, setUrl } = useFetch(undefined, {
    blob: true,
    noAuth: true,
  });

  useEffect(() => {
    if (infoState === BaseApiState.OK && info !== undefined) {
      setUrl(info.avatar_url);
      setState((prev) => ({
        ...prev,
        state: 'LOAD_IMAGE',
        info: cleanInfo(info),
      }));
    }
    if (infoState === BaseApiState.KO) {
      setState((prev) => ({ ...prev, state: BaseApiState.KO }));
    }
  }, [info, infoState, setUrl]);

  useEffect(() => {
    if (imageState === BaseApiState.OK) {
      setState((prev) => ({
        ...prev,
        state: imageState,
        image: URL.createObjectURL(image),
      }));
    }
    if (imageState === BaseApiState.KO) {
      setState((prev) => ({ ...prev, state: BaseApiState.KO }));
    }
  }, [image, imageState]);

  return state;
}
