import React from 'react';
import TableTitle from 'components/TableTitle';
import style from './style';

export default function Header() {
  return (
    <table style={style.fullWidth}>
      <tbody style={style.fullWidth}>
        <tr style={style.row} key="titles">
          <TableTitle value="Date" />
          <TableTitle value="Event" />
          <TableTitle value="Repository" />
          <TableTitle value="Commit message" />
        </tr>
      </tbody>
    </table>
  );
}
