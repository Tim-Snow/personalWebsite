import { NavigationState } from '../../state'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { NavigationAction } from '../../state/actions/navigation'

import Game from './Component'

function mapStateToProps({  }: NavigationState) {
  return {}
}

function mapPropsToDispatch(dispatch: Dispatch<NavigationAction>) {
  return {}
}

export default connect(
  mapStateToProps,
  mapPropsToDispatch,
)(Game)
