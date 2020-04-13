import React, { useState, useEffect, useCallback } from 'react';
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
    if (url) {
      return window.open(url);
    }
    if (state !== 'ok') {
      setInnerUrl(props.url);
      return setState('load');
    }
  }, [props.url, setInnerUrl, state, url]);

  useEffect(() => {
    if (requestState === 'ok' && res) {
      setState('ok');
      setUrl(res.html_url);
      window.open(url);
    }
    if (requestState === 'ko') {
      setState('ko');
    }
  }, [requestState, res, url]);

  return (
    <div onClick={getUrl} style={{ cursor: 'pointer' }}>
      <p style={{ textDecoration: 'underline' }}>{state === 'load' ? 'Loading...' : props.text}</p>
    </div>
  );
}
