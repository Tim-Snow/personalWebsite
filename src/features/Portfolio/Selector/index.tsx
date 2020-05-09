import React, { useRef } from 'react';

import style from './style';
import usePortfolio, { Portfolio } from '../usePortfolio';
import Item from '../Item';
import useSelector from './useSelector';
import { Fade } from '@material-ui/core';

interface Props {
  portfolios: Portfolio[];
  selected: number;
  hideDetail: () => void;
  showDetail: (i: number) => void;
}

interface HoverProps {
  scroll?: any;
  stop?: any;
  right?: boolean;
  visible: boolean;
}

export const HOVER_SELECTOR_WIDTH = 128;

function HoverScroller({ right, scroll, stop, visible }: HoverProps) {
  return (
    <Fade in={visible} style={{ width: HOVER_SELECTOR_WIDTH, cursor: 'default' }}>
      <div
        onMouseEnter={scroll}
        onMouseLeave={stop}
        style={{
          width: HOVER_SELECTOR_WIDTH,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingRight: right ? 0 : 24,
          paddingLeft: right ? 24 : 0,
        }}
      >
        <div
          style={{
            height: HOVER_SELECTOR_WIDTH / 2,
            width: HOVER_SELECTOR_WIDTH / 2,
            borderRadius: HOVER_SELECTOR_WIDTH,
            backgroundColor: 'grey',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 36,
            fontWeight: 'bold',
          }}
        >
          {right ? '>' : '<'}
        </div>
      </div>
    </Fade>
  );
}

export default function Selector({ portfolios, selected, hideDetail, showDetail }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { hoverScrollL, hoverScrollR, setSelected, stop, atEnd } = useSelector({
    containerRef,
    selected,
    showDetail,
    hideDetail,
  });
  const { state } = usePortfolio();
  return (
    <div style={style.content}>
      <HoverScroller
        scroll={hoverScrollL}
        stop={stop}
        visible={
          state === 'OK' && containerRef.current ? containerRef.current.scrollLeft! >= HOVER_SELECTOR_WIDTH : false
        }
      />
      <div style={style.content} ref={containerRef}>
        {portfolios &&
          portfolios.length > 0 &&
          portfolios.map((portfolio, i) => (
            <Item id={i} key={i} title={portfolio.name} details={portfolio.description} callback={setSelected} />
          ))}
      </div>
      <HoverScroller right scroll={hoverScrollR} stop={stop} visible={state === 'OK' && !atEnd} />
    </div>
  );
}
