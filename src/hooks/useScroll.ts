import { useState, useEffect, useCallback } from 'react';

export default function useScroll() {
  const [scroll, setScroll] = useState(window.scrollY);
  const scrollHandler = useCallback(() => setScroll(window.scrollY), []);
  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, [scrollHandler]);
  return scroll;
}
