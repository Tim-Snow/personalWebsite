import React, { useState, useEffect } from 'react'
import Collapse from '@material-ui/core/Collapse'

import PortfolioItem from './PortfolioItem'

import GithubSvg from '../assets/github.svg'

function Portfolio() {
  const [loaded, setLoaded] = useState(false)
  const [selected, setSelected] = useState(0)
  const [portfolios, setPortfolios] = useState([])

  useEffect(() => {
    if (!loaded) {
      getGitRepositories()
    }
  })

  const getGitRepositories = async () => {
    const { REACT_APP_API_KEY, REACT_APP_API_URL } = process.env
    const portfolios = await fetch(
      `${REACT_APP_API_URL}/users/tim-snow/repos`,
      {
        method: 'get',
        headers: {
          Authorization: `token ${REACT_APP_API_KEY}`,
        },
      },
    )
      .then(res => res.json())
      .catch(err => console.error(err))

    await setPortfolios(portfolios)
    await setLoaded(true)
  }

  const setSelectedInterceptor = i =>
    i === selected ? hiedDetailView() : showDetailView(i)

  const hiedDetailView = () => setSelected(0)
  const showDetailView = i => setSelected(i)

  return (
    <div style={styles.container}>
      <h2>Portfolio</h2>
      <div style={styles.flex}>
        {portfolios &&
          portfolios.map((portfolio, key) => (
            <PortfolioItem
              id={key + 1}
              title={portfolio.name}
              details={portfolio.description}
              callback={setSelectedInterceptor}
            />
          ))}
      </div>
      <Collapse in={selected !== 0}>
        <div style={styles.details}>
          <h5>{selected !== 0 && portfolios[selected - 1].name}</h5>
          {selected !== 0 && (
            <p>
              <a href={portfolios[selected - 1].html_url}>
                <img
                  style={styles.icon}
                  src={GithubSvg}
                  alt="View code on Github"
                />
              </a>
            </p>
          )}
          <p>{selected !== 0 && portfolios[selected - 1].description}</p>
          {selected !== 0 && (
            <p>Main language used: {portfolios[selected - 1].language}</p>
          )}
        </div>
      </Collapse>
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
    overflowX: 'scroll',
  },
  details: {
    backgroundColor: '#DFDFDF',
    margin: 10,
  },
  icon: { width: 24 },
}

export default Portfolio
