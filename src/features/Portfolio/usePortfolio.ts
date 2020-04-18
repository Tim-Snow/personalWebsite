import { useState, useEffect } from 'react';
import useHttpRequest from 'hooks/useHttpRequest';
import { BaseApiType, BaseApiState } from 'types/api';
import { API_BASE } from 'constants/index';

const PORTFOLIO_ENDPOINT = `${API_BASE}/repos`;

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

export default function usePortfolio() {
  const [state, setState] = useState<BaseApiType>(BaseApiState.LOAD);
  const [portfolios, setPortfolios] = useState<Portfolio[] | undefined>(undefined);
  const { res, state: requestState } = useHttpRequest<Portfolio[]>(PORTFOLIO_ENDPOINT);

  useEffect(() => {
    if (requestState === BaseApiState.OK && res) {
      setPortfolios(res.filter((item: Portfolio) => WANTED_REPOS.includes(item.name)));
    }
    setState(requestState);
  }, [requestState, res]);

  return { portfolios, state };
}
