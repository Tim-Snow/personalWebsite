import React, { useRef } from 'react';
import { Fade } from '@material-ui/core';

import { WithSpinner } from 'components/Spinner';
import { BaseApiState } from 'types/api';

import { usePortfolioState } from '../usePortfolio';
import Item from '../Item';

import style from './style';
import useSelector from './useSelector';

interface HoverProps {
  scroll?: () => void;
  stop?: () => void;
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
            userSelect: 'none',
          }}
        >
          {right ? '>' : '<'}
        </div>
      </div>
    </Fade>
  );
}

export default function Selector() {
  const { state, portfolios } = usePortfolioState();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { hoverScrollL, hoverScrollR, stop, atEnd } = useSelector({
    containerRef,
  });
  return (
    <WithSpinner loading={state === BaseApiState.LOAD} style={style.spinner}>
      {state === BaseApiState.KO ? (
        <p>I do have stuff... I just rely on Github API calls which haven&apos;t worked!</p>
      ) : (
        <div style={style.content}>
          <HoverScroller
            scroll={hoverScrollL}
            stop={stop}
            visible={
              state === 'OK' && containerRef.current ? containerRef.current.scrollLeft >= HOVER_SELECTOR_WIDTH : false
            }
          />
          <div style={style.content} ref={containerRef}>
            {portfolios &&
              portfolios.length > 0 &&
              portfolios.map((portfolio, i) => (
                <Item id={i} key={i} title={portfolio.name} details={portfolio.description} />
              ))}
          </div>
          <HoverScroller right scroll={hoverScrollR} stop={stop} visible={state === 'OK' && !atEnd} />
        </div>
      )}
    </WithSpinner>
  );
}
