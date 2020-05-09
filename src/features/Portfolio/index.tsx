import React from 'react';

import Detail from './Detail';
import style from './style';
import usePortfolio from './usePortfolio';

import { WithSpinner } from 'components/Spinner';
import { BaseApiState } from 'types/api';
import Selector from './Selector';

export default function Portfolio() {
  const { portfolios, state, hideDetailView, selected, showDetailView } = usePortfolio();
  return (
    <div style={style.container} id="portfolio">
      <h1>Portfolio</h1>
      <div style={style.flex}>
        {state === BaseApiState.KO ? (
          <p>I do have stuff... I just rely on Github API calls which haven&apos;t worked!</p>
        ) : (
          <WithSpinner loading={state === BaseApiState.LOAD} style={style.spinner}>
            <Selector
              portfolios={portfolios!}
              hideDetail={hideDetailView}
              showDetail={showDetailView}
              selected={selected}
            />
          </WithSpinner>
        )}
      </div>
      {state === BaseApiState.OK && portfolios && <Detail open={selected !== -1} portfolio={portfolios[selected]} />}
    </div>
  );
}
