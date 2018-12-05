import State from '../../state/IState'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { NavigationAction } from '../../state/actions/actions'

import Hamburger from './Component'

function mapStateToProps({  }: State) {
  return {}
}

function mapPropsToDispatch(dispatch: Dispatch<NavigationAction>) {
  return {}
}

export default connect(
  mapStateToProps,
  mapPropsToDispatch,
)(Hamburger)
