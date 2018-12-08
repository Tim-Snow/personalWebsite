import * as React from 'react'

import PortfolioItem from '../portfolio-item'

interface Props {}

export default class Portfolio extends React.Component<Props> {
  public render() {
    return (
      <div style={{ display: 'flex' }}>
        <PortfolioItem title="Digital Signal Analysis Influencing a 3D Scene" />
        <PortfolioItem title="JavaScript implementation of Conway's Game of Life" />
        <PortfolioItem title="Local Multiplayer Unity Game" />
        <PortfolioItem title="3D 'Sumo' Game" />
        <PortfolioItem title="Plain Sailing Android Application" />
        <PortfolioItem title="Java Fair TCP Server & Client" />
      </div>
    )
  }
}
