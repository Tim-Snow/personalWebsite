import { useState, useEffect, useCallback } from 'react';

export default function useScroll() {
  const [scroll, setScroll] = useState(0);
  const scrollHandler = useCallback(() => setScroll(window.scrollY), []);
  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, [scrollHandler]);
  return scroll;
}
