import React, { useMemo, useState, useEffect } from 'react';

import Icons, { Icon } from 'assets';
import A from 'components/A';
import usePrevious from 'hooks/usePrevious';
import { Fade } from '@material-ui/core';

interface Props {
  text?: string;
  icon: Icon;
  link?: string;
  linkText?: string;
}

const styles = {
  row: {
    height: 50,
  },
  col: {
    textAlign: 'center',
    width: 50,
  },
  icon: { width: 24 },
} as { [key: string]: React.CSSProperties };

export default function RowWithIcon({ icon = 'question', text = '', link = '', linkText = '' }: Props) {
  const [updated, setUpdated] = useState(false);
  const prevText = usePrevious(text);
  const Icon = useMemo(() => Icons[icon], [icon]);
  useEffect(() => {
    if (!updated && prevText !== text) {
      setUpdated(true);
    }
  }, [text, prevText, updated]);
  return (
    <tr style={styles.row}>
      <td style={styles.col}>
        <img style={styles.icon} src={Icon} alt={icon} />
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
