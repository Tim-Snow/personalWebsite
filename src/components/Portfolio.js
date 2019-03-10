import React, { useState } from 'react'

import PortfolioItem from './PortfolioItem'

function Portfolio() {
  const [selected, setSelected] = useState(0)

  const setSelectedInterceptor = e =>
    e === selected ? setSelected(0) : setSelected(e)

  return (
    <div style={styles.container}>
      <h2>Portfolio</h2>
      <div style={styles.flex}>
        <PortfolioItem id={1} title="Test" callback={setSelectedInterceptor} />
        <PortfolioItem
          id={2}
          title="Test 2"
          callback={setSelectedInterceptor}
        />
      </div>
      {selected !== 0 && (
        <div style={styles.details}>project info {selected}</div>
      )}
    </div>
  )
}

const styles = {
  container: {
    backgroundColor: '#DFDFDF',
    color: '#333',
    textAlign: 'center',
    padding: 10,
    margin: 10,
  },
  flex: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  details: {
    backgroundColor: '#DFDFDF',
    height: 300,
    borderStyle: 'solid',
  },
}

export default Portfolio
