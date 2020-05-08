import React, { useMemo } from 'react';
import useFetch from 'hooks/useFetch';
import { background, textColour } from 'constants/styles';

interface Rate {
  resources: Resources;
  rate: Core;
}

interface Resources {
  core: Core;
  search: Core;
  graphql: Core;
  integration_manifest: Core;
}

interface Core {
  limit: number;
  remaining: number;
  reset: number;
}

export default function ApiUsage() {
  const { res, state } = useFetch<Rate>('https://api.github.com/rate_limit');
  const reset = useMemo(
    () => (state === 'OK' && res ? new Date(res.resources.core.reset * 1000).toLocaleTimeString() : ''),
    [res, state],
  );
  return (
    <div
      style={{ position: 'absolute', left: 32, top: 128, backgroundColor: background, color: textColour, padding: 8 }}
    >
      {state === 'OK' && res && (
        <>
          <p>{`Used: ${res.resources.core.remaining} / ${res.resources.core.limit}`}</p>
          <p>{`Reset: ${reset}`}</p>
        </>
      )}
    </div>
  );
}
