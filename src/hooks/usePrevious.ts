import { useRef, useEffect } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function usePrevious(value: any) {
  const ref = useRef();
  useEffect(() => {
    if (ref.current === undefined) {
      ref.current = value;
    }
  });
  return ref.current;
}
