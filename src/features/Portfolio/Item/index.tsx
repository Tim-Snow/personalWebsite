import React, { useMemo, useCallback } from 'react';

import style from './style';
import Img from 'components/Img';
import { usePortfolioDispatch, usePortfolioState } from '../usePortfolio';
import { secondary } from 'constants/styles';

interface Props {
  id: number;
  title: string;
  details: string;
}

function Item({ id, title, details }: Props) {
  const { selected } = usePortfolioState();
  const dispatch = usePortfolioDispatch();
  const onClick = useCallback(() => dispatch({ type: 'select', payload: { id } }), [id, dispatch]);
  const prettyTitle = useMemo(() => title.split('-').join(' '), [title]);
  return (
    <button
      style={{ ...style.container, ...{ backgroundColor: selected === id ? '#666' : secondary } }}
      onClick={onClick}
    >
      <h2>{prettyTitle}</h2>
      <p>{details}</p>
      <Img src="github" width={56} />
    </button>
  );
}

export default React.memo(Item, (prevProps, nextProps) => {
  if (prevProps === nextProps) {
    return true;
  }
  return false;
});
