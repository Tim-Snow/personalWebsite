import React from 'react';

import './spinner.css';
import { Fade, Zoom } from '@material-ui/core';

interface Props {
  style?: React.CSSProperties;
}

export default function Spinner({ style }: Props) {
  return (
    <div style={{ width: 100, height: 100, position: 'absolute', top: 250, ...style }} className="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

interface WithProps {
  children: React.ReactNode;
  loading: boolean;
  style?: React.CSSProperties;
}

export function WithSpinner({ children, loading, style }: WithProps) {
  return (
    <>
      <Fade appear in={loading} unmountOnExit>
        <Spinner style={style} />
      </Fade>
      <Zoom in={!loading}>{children}</Zoom>
    </>
  );
}
