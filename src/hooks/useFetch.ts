import { useState, useEffect, useMemo, useCallback } from 'react';
import { BaseApiType, BaseApiState } from 'types/api';

const { REACT_APP_API_KEY } = process.env;

type Config = {
  blob?: boolean;
  noAuth?: boolean;
};

export default function useFetch<T>(url: string | undefined, config?: Config) {
  const [state, setState] = useState<BaseApiType>(BaseApiState.INIT);
  const [res, setRes] = useState<T | undefined>(undefined);
  const [myUrl, setUrl] = useState(url);

  const headers = useMemo(() => {
    if (config?.noAuth) {
      return;
    }
    return { Authorization: `token ${REACT_APP_API_KEY}` };
  }, [config]);

  useEffect(() => {
    if (myUrl && state === BaseApiState.INIT) {
      setState(BaseApiState.LOAD);
      fetch(myUrl, {
        method: 'get',
        headers,
      })
        .then((r) => (config?.blob ? r.blob() : r.json()))
        .then((jsonOrBlob) => setRes(jsonOrBlob))
        .then(() => setState(BaseApiState.OK))
        .catch((err) => {
          console.warn(`useHttp error for ${myUrl} - ${err}`);
          setState(BaseApiState.KO);
        });
    }
  }, [myUrl, config, state, headers]);

  const retry = useCallback(() => {
    setState(BaseApiState.INIT);
  }, []);

  return { res, state, setUrl, retry };
}
