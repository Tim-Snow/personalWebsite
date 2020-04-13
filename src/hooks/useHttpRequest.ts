import { useState, useEffect } from 'react';

const { REACT_APP_API_KEY } = process.env;

type Config = {
  blob?: boolean;
};

type State = 'init' | 'load' | 'ok' | 'ko';

export default function useHttpRequest<T>(url: string | undefined, config?: Config) {
  const [state, setState] = useState<State>('init');
  const [res, setRes] = useState<T | undefined>(undefined);
  const [u, setUrl] = useState(url);

  function done() {
    setTimeout(() => {
      setState('ok');
    }, 1500);
  }

  useEffect(() => {
    if (u) {
      setState('load');
      fetch(u, {
        method: 'get',
        headers: {
          Authorization: `token ${REACT_APP_API_KEY}`,
        },
      })
        .then((r) => (config?.blob ? r.blob() : r.json()))
        .then((jsonOrBlob) => setRes(jsonOrBlob))
        .then(done)
        // .then(() => setState('ok'))
        .catch((err) => {
          console.warn(err);
          setState('ko');
        });
    }
  }, [u, config]);

  return { res, state, setUrl };
}
