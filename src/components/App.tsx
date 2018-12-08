import * as React from 'react'
import { connect } from 'react-redux'

import Game from './game'
import Normal from './normal'
import Header from './header'

import * as Page from '../constants/pages'

interface Props {
  type: string
}

class App extends React.Component<Props> {
  public render() {
    return (
      <div style={{ textAlign: 'center', margin: '20px' }}>
        <Header />
        {(this.props.type === Page.GAME && <Game />) || <Normal />}
      </div>
    )
  }
}

function mapStateToProps(state: any) {
  return {
    type: state.navigation.type,
  }
}

export default connect(mapStateToProps)(App)
