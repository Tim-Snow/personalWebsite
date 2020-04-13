import React from 'react';
import TableTitle from 'components/TableTitle';

const styles = {
  fullWidth: {
    width: '100%',
    display: 'flex',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
} as { [key: string]: React.CSSProperties };

export default function Header() {
  return (
    <table style={styles.fullWidth}>
      <tbody style={styles.fullWidth}>
        <tr style={styles.row} key="titles">
          <TableTitle value="Date" />
          <TableTitle value="Event" />
          <TableTitle value="Repository" />
          <TableTitle value="Commit message" />
        </tr>
      </tbody>
    </table>
  );
}
