import * as React from 'react'

export default class Game extends React.Component {
  public render() {
    return (
      <div>
        <h1>Game</h1>
        <canvas
          style={{ width: 640, height: 480, border: '1px solid black' }}
        />
      </div>
    )
  }
}
