import React, { useCallback, useState } from 'react';
import { WithSpinner } from './Spinner';
import icons, { Icon } from 'assets';

interface Props {
  src: Icon;
  width?: number;
  alt?: string;
}

export default function Img(props: Props) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const setLoaded = useCallback(() => setImageLoaded(true), []);

  return (
    <WithSpinner loading={!imageLoaded}>
      <img src={icons[props.src]} onLoad={setLoaded} alt={props?.alt || props?.src} style={{ width: props?.width }} />
    </WithSpinner>
  );
}
