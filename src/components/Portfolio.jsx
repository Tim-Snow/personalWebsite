import React, { useState, useEffect } from 'react'

import PortfolioItem from './PortfolioItem'
import request from '../libs/request'
import PortfolioDetail from './PortfolioDetail'

import { secondary, shadow, radius } from '../constants/styles'

function Portfolio() {
  const [selected, setSelected] = useState(-1)
  const [portfolios, setPortfolios] = useState([])

  useEffect(() => {
    getGitRepositories()
  }, [])

  const getGitRepositories = async () => {
    const portfolios = await request('/users/tim-snow/repos')
    await setPortfolios(portfolios)
  }

  const setSelectedInterceptor = i =>
    i === selected ? hideDetailView() : showDetailView(i)
  const hideDetailView = () => setSelected(-1)
  const showDetailView = i => setSelected(i)

  return (
    <div style={styles.container}>
      <h2>Portfolio</h2>
      <div style={styles.flex}>
        {portfolios &&
          portfolios.map((portfolio, key) => (
            <PortfolioItem
              id={key}
              key={key}
              title={portfolio.name}
              details={portfolio.description}
              callback={setSelectedInterceptor}
            />
          ))}
      </div>

      {portfolios && (
        <PortfolioDetail
          open={selected !== -1}
          portfolio={portfolios[selected]}
        />
      )}
    </div>
  )
}

const styles = {
  container: {
    borderRadius: radius,
    backgroundColor: secondary,
    color: '#333',
    textAlign: 'center',
    padding: 10,
    margin: 10,
    boxShadow: shadow,
  },
  flex: {
    display: 'flex',
    overflowX: 'auto',
  },
}

export default Portfolio
