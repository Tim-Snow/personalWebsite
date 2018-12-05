import * as React from 'react'

import State from '../../state/IState'
import { NavigationAction } from '../../state/actions/actions'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import About from '../about'
import Contact from '../contact'
import Portfolio from '../portfolio'

interface Props {
  view: string
}

class Normal extends React.Component<Props> {
  public render() {
    return (
      <div>
        {this.props.view === 'about' && <About />}
        {this.props.view === 'contact' && <Contact />}
        {this.props.view === 'portfolio' && <Portfolio />}
      </div>
    )
  }
}

function mapStateToProps({ view }: State) {
  return { view }
}

function mapDispatchToProps(dispatch: Dispatch<NavigationAction>) {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Normal)
