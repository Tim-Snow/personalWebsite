import React, { useState, useEffect, useCallback } from 'react';
import useHttpRequest from 'hooks/useHttpRequest';
import { BaseApiState, BaseApiType } from 'types/api';

interface Props {
  url: string;
  text: string;
}

type State = BaseApiType;

export default function Link(props: Props) {
  const [state, setState] = useState<State>(BaseApiState.INIT);
  const [url, setUrl] = useState('');
  const { res, state: requestState, setUrl: setInnerUrl } = useHttpRequest<{ html_url: string }>(undefined);

  const getUrl = useCallback(() => {
    if (url) {
      return window.open(url);
    }
    if (state !== BaseApiState.OK) {
      setInnerUrl(props.url);
      return setState(BaseApiState.LOAD);
    }
  }, [props.url, setInnerUrl, state, url]);

  useEffect(() => {
    if (url) {
      window.open(url);
    }
  }, [url]);

  useEffect(() => {
    if (requestState === BaseApiState.OK && res) {
      setUrl(res.html_url);
    }
    setState(requestState);
  }, [requestState, res, url]);

  return (
    <div onClick={getUrl} style={{ cursor: 'pointer' }}>
      {
        // eslint-disable-next-line
        <a href={undefined} title={url || props.url} style={{ textDecoration: 'underline' }}>
          {state === BaseApiState.LOAD ? 'Loading...' : props.text}
        </a>
      }
    </div>
  );
}
