import React from 'react'
import TableTitle from './TableTitle'

const Header = () => (
  <table style={styles.fullWidth}>
    <tbody style={styles.fullWidth}>
      <tr style={styles.row} key="titles">
        <TableTitle style={styles.column} value="Date" />
        <TableTitle style={styles.column} value="Event" />
        <TableTitle style={styles.column} value="Repository" />
        <TableTitle style={styles.column} value="Commit message" />
      </tr>
    </tbody>
  </table>
)

const styles = {
  fullWidth: {
    width: '100%',
    display: 'flex',
  },
  column: {
    flex: 1,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
}

export default Header
