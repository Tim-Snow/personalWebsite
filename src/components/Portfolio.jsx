import React, { useState, useEffect, useCallback } from 'react';

import PortfolioItem from './PortfolioItem';
import request from '../libs/request';
import PortfolioDetail from './PortfolioDetail';

import { secondary, radius, textColour } from '../constants/styles';

const WANTED_REPOS = [
  'final-year-project',
  'game-of-life',
  'pacman-python',
  'personal-website',
  'plain-sailing-android',
  'scientist-brawl',
  'pong-server-and-client',
  'homepage',
  'snake',
];

const Portfolio = () => {
  const [selected, setSelected] = useState(-1);
  const [portfolios, setPortfolios] = useState([]);
  const [loaded, setLoaded] = useState(undefined);

  const getGitRepositories = useCallback(() => {
    if (!loaded) {
      setLoaded(true);
      request({ endpoint: '/users/tim-snow/repos' })
        .then(res =>
          setPortfolios(res.filter(item => WANTED_REPOS.includes(item.name))),
        )
        .catch(() => setLoaded(false));
    }
  }, [loaded]);

  useEffect(() => {
    getGitRepositories();
  }, [getGitRepositories]);

  const hideDetailView = () => setSelected(-1);
  const showDetailView = i => setSelected(i);
  const setSelectedInterceptor = i =>
    i === selected ? hideDetailView() : showDetailView(i);

  return (
    <div style={styles.container}>
      <h2>Portfolio</h2>
      <div style={styles.flex}>
        {(loaded === false && (
          <p>
            I do have stuff... I just rely on Github API calls which haven't
            worked!
          </p>
        )) ||
          (portfolios &&
            portfolios.length > 0 &&
            portfolios.map((portfolio, i) => (
              <PortfolioItem
                id={i}
                key={i}
                title={portfolio.name}
                details={portfolio.description}
                callback={setSelectedInterceptor}
              />
            )))}
      </div>
      {loaded && (
        <PortfolioDetail
          open={selected !== -1}
          portfolio={portfolios[selected]}
        />
      )}
    </div>
  );
};

const styles = {
  container: {
    borderRadius: radius,
    backgroundColor: secondary,
    color: textColour,
    textAlign: 'center',
    padding: 10,
    margin: 10,
  },
  flex: {
    display: 'flex',
    overflowX: 'auto',
    justifyContent: 'center',
  },
};

export default Portfolio;
