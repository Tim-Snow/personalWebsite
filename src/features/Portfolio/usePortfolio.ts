import { useState, useEffect } from 'react';
import useHttpRequest from 'hooks/useHttpRequest';

const PORTFOLIO_ENDPOINT = 'https://api.github.com/users/tim-snow/repos';

const WANTED_REPOS = [
  'final-year-project',
  'game-of-life',
  'pacman',
  'personal-website',
  'plain-sailing',
  'scientist-brawl',
  'pong-server-and-client',
  'home-monitor',
  'snake',
  'sumo',
];
type Portfolio = {
  name: string;
  description: string;
  html_url: string;
};

type PortfolioState = 'load' | 'ok' | 'ko';

export default function usePortfolio() {
  const [state, setState] = useState<PortfolioState>('load');
  const [portfolios, setPortfolios] = useState<Portfolio[] | undefined>(undefined);
  const { res, state: requestState } = useHttpRequest<Portfolio[]>(PORTFOLIO_ENDPOINT);

  useEffect(() => {
    if (requestState === 'ok' && res) {
      setPortfolios(res.filter((item: Portfolio) => WANTED_REPOS.includes(item.name)));
      setState('ok');
    }
    if (requestState === 'ko') {
      setState('ko');
    }
  }, [requestState, res]);

  return { portfolios, state };
}
