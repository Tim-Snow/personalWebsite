import React, { useState, useCallback, useEffect } from 'react';

interface Props {
  containerRef: React.MutableRefObject<HTMLDivElement | null>;
  hideDetail: () => void;
  showDetail: (i: number) => void;
  selected: number;
}

export default function useSelector({ containerRef, selected, hideDetail, showDetail }: Props) {
  const [horizOffset, setHorizOffset] = useState(0);
  const setSelected = useCallback((i) => (i === selected ? hideDetail() : showDetail(i)), [
    hideDetail,
    selected,
    showDetail,
  ]);
  const [scroll, setScroll] = useState<'left' | 'right' | null>(null);
  const hoverScrollL = useCallback(() => {
    setScroll('left');
  }, []);
  const hoverScrollR = useCallback(() => {
    setScroll('right');
  }, []);
  const stop = useCallback(() => {
    setScroll(null);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      if (typeof containerRef.current.scrollTo === 'function') {
        containerRef.current.scrollTo({ left: horizOffset });
      }
    }
  }, [horizOffset, containerRef]);

  useEffect(() => {
    let interval: any;
    if (scroll) {
      interval = setInterval(() => setHorizOffset((p) => (scroll === 'left' ? p - 10 : p + 10)), 10);
    }
    return () => {
      clearInterval(interval);
    };
  }, [scroll, setHorizOffset]);

  const [atEnd, setAtEnd] = useState(false);

  const handleScroll = useCallback((e) => {
    if (e.target.scrollLeft >= e.target.scrollLeftMax) {
      setAtEnd(true);
      setScroll(null);
    } else {
      setAtEnd(false);
    }
  }, []);

  useEffect(() => {
    containerRef.current?.addEventListener('scroll', handleScroll);
  }, [containerRef, handleScroll]);

  return { hoverScrollL, hoverScrollR, stop, setSelected, atEnd };
}
