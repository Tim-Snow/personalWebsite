import { useState, useEffect } from 'react';
import useFetch from 'hooks/useFetch';
import { BaseApiType, BaseApiState } from 'types/api';
import { API_BASE } from 'constants/index';
import { ProjectName } from 'assets/portfolio';

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
  name: ProjectName;
  description: string;
  html_url: string;
};

export default function usePortfolio() {
  const [state, setState] = useState<BaseApiType>(BaseApiState.LOAD);
  const [portfolios, setPortfolios] = useState<Portfolio[] | undefined>(undefined);
  const { res, state: requestState } = useFetch<Portfolio[]>(PORTFOLIO_ENDPOINT);

  useEffect(() => {
    if (requestState === BaseApiState.OK && res) {
      setPortfolios(res.filter((item: Portfolio) => WANTED_REPOS.includes(item.name)));
    }
    setState(requestState);
  }, [requestState, res]);

  return { portfolios, state };
}
