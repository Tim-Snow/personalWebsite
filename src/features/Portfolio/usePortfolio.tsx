import React, { useReducer } from 'react';
import { useEffect } from 'react';
import useFetch from 'hooks/useFetch';
import { BaseApiState, BaseApiType } from 'types/api';
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

type Action = SetPortfolios | SelectItem | NextItem | PrevItem | Close;

type Dispatch = (action: Action) => void;

type State = { state: BaseApiType; portfolios: Portfolio[] | undefined; selected: number; detailShowing: boolean };

type PortfolioProviderProps = { children: React.ReactNode };

const PortfolioStateContext = React.createContext<State | undefined>(undefined);

const PortfolioDispatchContext = React.createContext<Dispatch | undefined>(undefined);

function portfolioReducer(state: State, action: Action) {
  switch (action.type) {
    case 'set_portfolios': {
      return { ...state, portfolios: action.payload, state: BaseApiState.OK };
    }
    case 'select': {
      return {
        ...state,
        selected: action.payload.id === state.selected ? -1 : action.payload.id,
        detailShowing: action.payload.id === state.selected ? false : true,
      };
    }
    case 'next': {
      return {
        ...state,
        selected:
          state.portfolios && state.selected < state.portfolios.length - 1 ? state.selected + 1 : state.selected,
      };
    }
    case 'prev': {
      return { ...state, selected: state.selected === 0 ? state.selected : state.selected - 1 };
    }
    case 'close': {
      return { ...state, detailShowing: false, selected: -1 };
    }
    default: {
      throw new Error(`Unhandled action type: ${action!.type}`);
    }
  }
}

function PortfolioProvider({ children }: PortfolioProviderProps) {
  const [state, dispatch] = useReducer(portfolioReducer, {
    state: 'LOAD',
    portfolios: undefined,
    selected: -1,
    detailShowing: false,
  });

  const { res, state: requestState } = useFetch<Portfolio[]>(PORTFOLIO_ENDPOINT);

  useEffect(() => {
    if (requestState === BaseApiState.OK && res) {
      dispatch({ type: 'set_portfolios', payload: res.filter((item: Portfolio) => WANTED_REPOS.includes(item.name)) });
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
