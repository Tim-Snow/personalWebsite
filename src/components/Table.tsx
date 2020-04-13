import React from 'react';

interface Props {
  children: React.ReactNode;
  tableStyle?: React.CSSProperties;
  tbodyStyle?: React.CSSProperties;
}

export default function Table({ children, tableStyle = {}, tbodyStyle = {} }: Props) {
  return (
    <table style={tableStyle}>
      <tbody style={tbodyStyle}>{children}</tbody>
    </table>
  );
}
