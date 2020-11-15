import React, { useReducer } from 'react';
import { useEffect } from 'react';
import useHttpRequest from 'hooks/useHttpRequest';
import { BaseApiState, BaseApiType } from 'types/api';
import { API_BASE } from 'constants/index';
import Portfolio from '.';

import PortfolioImages from 'assets/portfolio/images';
import PortfolioContent, { ProjectName } from 'assets/portfolio';

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

export type Portfolio = {
  name: ProjectName;
  description: string;
  html_url: string;
};

type SetPortfolios = { type: 'set_portfolios'; payload: Portfolio[] };
type SelectItem = { type: 'select'; payload: { id: number } };
type NextItem = { type: 'next' };
type PrevItem = { type: 'prev' };
type Close = { type: 'close' };
type SetKO = { type: 'set_ko' };

const initialState = {
  state: 'LOAD',
  portfolios: undefined,
  selected: -1,
  current: undefined,
} as const;

type Action = SetPortfolios | SelectItem | NextItem | PrevItem | Close | SetKO;

type Dispatch = (action: Action) => void;

type CompletePortfolio = {
  fromGit: Portfolio;
  image: any;
  extraContent: PortfolioContent;
};

type State = {
  state: BaseApiType;
  portfolios: Portfolio[] | undefined;
  selected: number;
  current: CompletePortfolio | undefined;
};

const PortfolioStateContext = React.createContext<State | undefined>(undefined);

const PortfolioDispatchContext = React.createContext<Dispatch | undefined>(undefined);

const getPortfolioContent = (id: number, portfolios: Portfolio[]) => ({
  fromGit: portfolios[id],
  image: PortfolioImages[portfolios[id].name],
  extraContent: PortfolioContent[portfolios[id].name],
});

function portfolioReducer(state: State, action: Action) {
  switch (action.type) {
    case 'set_portfolios': {
      return { ...state, portfolios: action.payload, state: BaseApiState.OK };
    }
    case 'select': {
      return {
        ...state,
        selected: action.payload.id === state.selected ? -1 : action.payload.id,
        current:
          state.portfolios && action.payload.id !== -1
            ? getPortfolioContent(action.payload.id, state.portfolios)
            : undefined,
      };
    }
    case 'next': {
      if (state.portfolios && state.selected < state.portfolios.length - 1) {
        const next = state.selected + 1;
        return {
          ...state,
          selected: next,
          current: getPortfolioContent(next, state.portfolios),
        };
      }
      return { ...state };
    }
    case 'prev': {
      if (state.portfolios && state.selected !== 0) {
        const prev = state.selected - 1;
        return { ...state, selected: prev, current: getPortfolioContent(prev, state.portfolios) };
      }
      return { ...state };
    }
    case 'close': {
      return { ...state, selected: -1 };
    }
    case 'set_ko': {
      return { ...state, state: BaseApiState.KO };
    }
    default: {
      throw new Error(`Unhandled action type: ${action!.type}`);
    }
  }
}

function PortfolioProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(portfolioReducer, initialState);

  const { res, state: requestState } = useHttpRequest<Portfolio[]>(PORTFOLIO_ENDPOINT);

  useEffect(() => {
    if (requestState === BaseApiState.OK && res) {
      dispatch({ type: 'set_portfolios', payload: res.filter((item: Portfolio) => WANTED_REPOS.includes(item.name)) });
    } else if (requestState === BaseApiState.KO) {
      dispatch({ type: 'set_ko' });
    }
  }, [requestState, res]);

  return (
    <PortfolioStateContext.Provider value={state}>
      <PortfolioDispatchContext.Provider value={dispatch}>{children}</PortfolioDispatchContext.Provider>
    </PortfolioStateContext.Provider>
  );
}

function usePortfolioState() {
  const context = React.useContext(PortfolioStateContext);

  if (context === undefined) {
    throw new Error('usePortfolioState must be used within a PortfolioProvider');
  }

  return context;
}

function usePortfolioDispatch() {
  const context = React.useContext(PortfolioDispatchContext);

  if (context === undefined) {
    throw new Error('usePortfolioDispatch must be used within a PortfolioProvider');
  }

  return context;
}

export { PortfolioProvider, usePortfolioState, usePortfolioDispatch };
