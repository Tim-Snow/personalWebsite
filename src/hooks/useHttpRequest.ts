import { useState, useEffect, useMemo } from 'react';

const { REACT_APP_API_KEY } = process.env;

type Config = {
  blob?: boolean;
  noAuth?: boolean;
};

type State = 'init' | 'load' | 'ok' | 'ko';

export default function useHttpRequest<T>(url: string | undefined, config?: Config) {
  const [state, setState] = useState<State>('init');
  const [res, setRes] = useState<T | undefined>(undefined);
  const [u, setUrl] = useState(url);

  const headers = useMemo(() => {
    if (config?.noAuth) {
      return;
    }
    return { Authorization: `token ${REACT_APP_API_KEY}` };
  }, [config]);

  useEffect(() => {
    if (u && state === 'init') {
      setState('load');
      fetch(u, {
        method: 'get',
        headers,
      })
        .then((r) => (config?.blob ? r.blob() : r.json()))
        .then((jsonOrBlob) => setRes(jsonOrBlob))
        .then(() => setState('ok'))
        .catch((err) => {
          console.warn(`useHttp error for ${u} - ${err}`);
          setState('ko');
        });
    }
  }, [u, config, state, headers]);

  return { res, state, setUrl };
}
