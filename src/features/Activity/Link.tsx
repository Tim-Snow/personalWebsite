import React, { useState, useEffect, useCallback, useMemo } from 'react';
import useHttpRequest from 'hooks/useHttpRequest';
import { BaseApiState, BaseApiType } from 'types/api';
import { textColour } from 'constants/styles';

interface Props {
  url: string;
  text: string;
  style?: React.CSSProperties;
}

type State = BaseApiType;

const MAX_TEXT_LENGTH = 50;

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

  const text = useMemo(() => {
    return props.text.length > MAX_TEXT_LENGTH ? props.text.substr(0, MAX_TEXT_LENGTH) + '...' : props.text;
  }, [props.text]);

  return (
    <button
      onClick={getUrl}
      style={{ backgroundColor: 'transparent', border: 0, cursor: 'pointer', color: textColour, ...props.style }}
    >
      {
        // eslint-disable-next-line
        <a href={undefined} title={url || props.url} style={{ textDecoration: 'underline' }}>
          {state === BaseApiState.LOAD ? 'Loading...' : text}
        </a>
      }
    </button>
  );
}
