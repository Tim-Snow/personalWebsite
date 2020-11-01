import React from 'react';

import Detail from './Detail';
import Selector from './Selector';
import style from './style';
import { PortfolioProvider } from './usePortfolio';

export default function Portfolio() {
  return (
    <PortfolioProvider>
      <div style={style.container} id="portfolio">
        <h1>Portfolio</h1>
        <Selector />
        <Detail />
      </div>
    </PortfolioProvider>
  );
}
