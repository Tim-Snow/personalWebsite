import React, { useState, useEffect, useMemo } from 'react';

import Icons, { Icon } from 'assets';
import A from 'components/A';
import usePrevious from 'hooks/usePrevious';
import { Fade } from '@material-ui/core';
import style from './style';

interface Props {
  text?: string;
  icon: Icon;
  link?: string;
  linkText?: string;
}

export default function RowWithIcon({ icon = 'question', text = '', link = '', linkText = '' }: Props) {
  const [updated, setUpdated] = useState(false);
  const Icon = useMemo(() => Icons[icon], [icon]);
  const prevText = usePrevious(text);
  useEffect(() => {
    if (!updated && prevText !== text) {
      setUpdated(true);
    }
  }, [text, prevText, updated]);
  return (
    <tr style={style.row}>
      <td style={style.col}>
        <img style={{ width: 24 }} src={Icon} alt={icon} />
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
