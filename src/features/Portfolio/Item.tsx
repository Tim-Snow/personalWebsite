import React, { useMemo } from 'react';

import { textColour, main, secondary } from 'constants/styles';
import GithubSvg from 'assets/github.svg';
import { useCallback } from 'react';

interface Props {
  id: number;
  title: string;
  details: string;
  callback: (id: number) => void;
}

const styles = {
  container: {
    backgroundColor: secondary,
    borderColor: main,
    borderStyle: 'solid',
    borderWidth: 2,
    color: textColour,
    minWidth: 250,
    minHeight: 250,
    margin: 15,
    padding: 10,
    overflow: 'hidden',
    borderRadius: 10,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
    textTransform: 'capitalize',
  } as React.CSSProperties,
};

export default function Item({ id, title, details, callback }: Props) {
  const onClick = useCallback(() => callback(id), [id, callback]);
  const prettyTitle = useMemo(() => title.split('-').join(' '), [title]);
  return (
    <div style={styles.container} onClick={onClick}>
      <h2>{prettyTitle}</h2>
      <p>{details}</p>
      <img style={{ width: 56 }} src={GithubSvg} alt="Github" />
    </div>
  );
}
