import React, { useMemo, useCallback } from 'react';

import style from './style';
import Img from 'components/Img';

interface Props {
  id: number;
  title: string;
  details: string;
  callback: (id: number) => void;
}

function Item({ id, title, details, callback }: Props) {
  const onClick = useCallback(() => callback(id), [id, callback]);
  const prettyTitle = useMemo(() => title.split('-').join(' '), [title]);
  return (
    <div style={style.container} onClick={onClick}>
      <h2>{prettyTitle}</h2>
      <p>{details}</p>
      <Img src="github" width={56} />
    </div>
  );
}

export default React.memo(Item, (prevProps, nextProps) => {
  if (prevProps === nextProps) {
    return true;
  }
  return false;
});
