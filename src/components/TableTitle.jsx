import React from 'react'

const TableTitle = props => {
  return (
    <td style={styles.col}>
      <p style={styles.text}>{props.value}</p>
    </td>
  )
}

const styles = {
  col: {
    flex: 1,
  },
  text: {
    fontWeight: 600,
    fontSize: 13,
  },
}

export default TableTitle
