import * as React from 'react'

interface Props {}

export default class Portfolio extends React.Component<Props> {
  public render() {
    return (
      <div>
        <p>Digital Signal Analysis Influencing a 3D Scene</p>
        <p>JavaScript implementation of Conway's Game of Life</p>
        <p>Local Multiplayer Unity Game</p>
        <p>3D 'Sumo' Game</p>
        <p>Plain Sailing Android Application</p>
        <p>Java Fair TCP Server & Client</p>
      </div>
    )
  }
}
