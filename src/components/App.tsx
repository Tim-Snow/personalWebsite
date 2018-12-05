import * as React from 'react'
import { connect } from 'react-redux'

import Game from './game'
import Normal from './normal'
import Header from './header'

import State from '../state/IState'

interface Props {
  type: string
}

class App extends React.Component<Props> {
  public render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <Header />
        {(this.props.type === 'game' && <Game />) || <Normal />}
      </div>
    )
  }
}

function mapStateToProps({ type }: State) {
  return {
    type,
  }
}

export default connect(mapStateToProps)(App)
