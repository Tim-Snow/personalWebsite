import React from 'react';

interface Props {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export default function Title({ children, style = {} }: Props) {
  return <h1 style={style}>{children}</h1>;
}
