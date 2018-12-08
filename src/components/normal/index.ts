import { NavigationAction } from '../../state/navigation/actions'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import Normal from './Component'

function mapStateToProps(state: any) {
  return { view: state.navigation.view }
}

function mapDispatchToProps(dispatch: Dispatch<NavigationAction>) {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Normal)
