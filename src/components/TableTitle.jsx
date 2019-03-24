import React from 'react'

const TableTitle = props => {
  return (
    <th style={styles.col}>
      <p style={styles.text}>{props.value}</p>
    </th>
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
