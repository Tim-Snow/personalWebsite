import React from 'react';

interface Props {
  url: string;
  children: React.ReactNode;
}

export default function A({ url, children }: Props) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}
