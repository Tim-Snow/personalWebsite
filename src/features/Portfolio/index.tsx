import React, { useState, useCallback } from 'react';

import Item from './Item';
import Detail from './Detail';
import style from './style';
import usePortfolio from './usePortfolio';

import { WithSpinner } from 'components/Spinner';
import { BaseApiState } from 'types/api';

export default function Portfolio() {
  const [selected, setSelected] = useState(-1);
  const { portfolios, state } = usePortfolio();

  const hideDetailView = useCallback(() => setSelected(-1), []);
  const showDetailView = useCallback((i) => setSelected(i), []);
  const setSelectedInterceptor = useCallback((i) => (i === selected ? hideDetailView() : showDetailView(i)), [
    hideDetailView,
    selected,
    showDetailView,
  ]);

  return (
    <div style={style.container} id="portfolio">
      <h1>Portfolio</h1>
      <div style={style.flex}>
        {state === BaseApiState.KO ? (
          <p>I do have stuff... I just rely on Github API calls which haven&apos;t worked!</p>
        ) : (
          <WithSpinner loading={state === BaseApiState.LOAD} style={style.spinner}>
            <div style={style.content}>
              {portfolios &&
                portfolios.length > 0 &&
                portfolios.map((portfolio, i) => (
                  <Item
                    id={i}
                    key={i}
                    title={portfolio.name}
                    details={portfolio.description}
                    callback={setSelectedInterceptor}
                  />
                ))}
            </div>
          </WithSpinner>
        )}
      </div>
      {state === BaseApiState.OK && portfolios && <Detail open={selected !== -1} portfolio={portfolios[selected]} />}
    </div>
  );
}
