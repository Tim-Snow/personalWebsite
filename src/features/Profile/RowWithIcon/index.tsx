import React, { useState, useEffect } from 'react';

import { Icon } from 'assets';
import A from 'components/A';
import usePrevious from 'hooks/usePrevious';
import { Fade } from '@material-ui/core';
import style from './style';
import Img from 'components/Img';

interface Props {
  text?: string;
  icon: Icon;
  link?: string;
  linkText?: string;
}

export default function RowWithIcon({ icon = 'question', text = '', link = '', linkText = '' }: Props) {
  const [updated, setUpdated] = useState(false);
  const prevText = usePrevious(text);
  useEffect(() => {
    if (!updated && prevText !== text) {
      setUpdated(true);
    }
  }, [text, prevText, updated]);
  return (
    <tr style={style.row}>
      <td style={style.col}>
        <Img width={24} alt={icon} src={icon} />
      </td>
      <td>
        <Fade in={updated} timeout={5000}>
          <p style={{ position: 'relative', top: 0 }}>
            {text} {linkText && <A url={link}>{linkText}</A>}
          </p>
        </Fade>
        <Fade appear in={!updated} timeout={1000}>
          <p style={{ position: 'absolute', top: -40 }}>
            {prevText} {linkText && <A url={link}>{linkText}</A>}
          </p>
        </Fade>
      </td>
    </tr>
  );
}
