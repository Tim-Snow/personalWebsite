import React, { useState, useEffect, useCallback } from 'react';
import A from 'components/A';
import useHttpRequest from 'hooks/useHttpRequest';

interface Props {
  url: string;
  text: string;
}

type State = 'init' | 'load' | 'ok' | 'ko';

export default function Link(props: Props) {
  const [state, setState] = useState<State>('init');
  const [url, setUrl] = useState('');
  const { res, state: requestState, setUrl: setInnerUrl } = useHttpRequest<{ html_url: string }>(undefined);

  const getUrl = useCallback(() => {
    setInnerUrl(props.url);
    setState('load');
  }, [props.url, setInnerUrl]);

  useEffect(() => {
    if (requestState === 'ok' && res) {
      setState('ok');
      setUrl(res.html_url);
    }
    if (requestState === 'ko') {
      setState('ko');
    }
  }, [requestState, res]);

  return (
    <div onClick={getUrl}>
      <A url={url}>{state === 'load' ? 'Loading...' : props.text}</A>
    </div>
  );
}
