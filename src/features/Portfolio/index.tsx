import React, { useState, useCallback } from 'react';

import Item from './Item';
import Detail from './Detail';

import { secondary, textColour } from 'constants/styles';
import usePortfolio from './usePortfolio';
import { WithSpinner } from 'components/Spinner';

const styles = {
  container: {
    backgroundColor: secondary,
    color: textColour,
    textAlign: 'center',
    padding: 10,
    marginTop: 24,
    minHeight: 350,
  },
  flex: {
    display: 'flex',
    justifyContent: 'center',
  },
} as { [key: string]: React.CSSProperties };

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
    <div style={styles.container} id="portfolio">
      <h1>Portfolio</h1>
      <div style={styles.flex}>
        {(state === 'ko' && <p>I do have stuff... I just rely on Github API calls which haven&apos;t worked!</p>) || (
          <WithSpinner loading={state === 'load'} style={{ position: 'relative', top: 50 }}>
            <div style={{ display: 'flex', flexWrap: 'nowrap', overflow: 'hidden', overflowX: 'auto' }}>
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
      {state === 'ok' && portfolios && <Detail open={selected !== -1} portfolio={portfolios[selected]} />}
    </div>
  );
}
