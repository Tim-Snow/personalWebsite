import React from 'react';

interface Props {
  value: string;
}

const styles = {
  col: {
    flex: 1,
  },
  text: {
    fontWeight: 600,
    fontSize: 13,
  },
};

export default function TableTitle(props: Props) {
  return (
    <th style={styles.col}>
      <p style={styles.text}>{props.value}</p>
    </th>
  );
}
