import * as React from 'react'

import * as image from './home.png'

export default class Game extends React.Component {
  public render() {
    return (
      <div>
        <img
          src={image}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100%',
            zIndex: -1,
          }}
        />
        {/* <h1>Game</h1>
        <canvas
          style={{ width: 640, height: 480, border: '1px solid black' }}
        /> */}
      </div>
    )
  }
}
