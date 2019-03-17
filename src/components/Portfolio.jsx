import React, { useState, useEffect } from 'react'
import Collapse from '@material-ui/core/Collapse'

import PortfolioItem from './PortfolioItem'
import request from '../libs/request'

import GithubSvg from '../assets/github.svg'
import PortfolioImages from '../assets/portfolio-images'

function Portfolio() {
  const [selected, setSelected] = useState(-1)
  const [portfolios, setPortfolios] = useState([])

  useEffect(() => {
    getGitRepositories()
  }, [])

  const getGitRepositories = async () => {
    const portfolios = await request('/api/users/tim-snow/repos')
    await setPortfolios(portfolios)
  }

  const setSelectedInterceptor = i =>
    i === selected ? hideDetailView() : showDetailView(i)
  const hideDetailView = () => setSelected(-1)
  const showDetailView = i => setSelected(i)

  let current
  if (portfolios && selected !== -1) current = portfolios[selected].name

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
      <Collapse in={selected !== -1}>
        <div style={styles.details}>
          {selected !== -1 && (
            <div>
              <h5>{current}</h5>
              <p>
                <a href={portfolios[selected].html_url}>
                  <img
                    style={styles.icon}
                    src={GithubSvg}
                    alt="View code on Github"
                  />
                </a>
              </p>
              <img
                src={PortfolioImages[current]}
                alt={current}
                style={styles.image}
              />
              <p>{portfolios[selected].description}</p>
              <p>Main language used: {portfolios[selected].language}</p>
            </div>
          )}
        </div>
      </Collapse>
    </div>
  )
}

const styles = {
  container: {
    borderRadius: 4,
    backgroundColor: '#DFDFDF',
    color: '#333',
    textAlign: 'center',
    padding: 10,
    margin: 10,
  },
  flex: {
    display: 'flex',
    overflowX: 'scroll',
  },
  details: {
    backgroundColor: '#DFDFDF',
    margin: 10,
  },
  icon: { width: 24 },
  image: {
    maxHeight: 600,
    maxWidth: 600,
  },
}

export default Portfolio
