import { useState, useEffect } from 'react';

export default function useScroll() {
  const [scroll, setScroll] = useState(0);
  const scrollHandler = () => {
    setScroll(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  });
  return scroll;
}
