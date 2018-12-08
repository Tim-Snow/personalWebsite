import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { HamburgerAction, toggle } from '../../state/hamburger/actions'

import Hamburger from './Component'

function mapStateToProps({ hamburger: { isOpen } }: any) {
  return { isOpen }
}

function mapPropsToDispatch(dispatch: Dispatch<HamburgerAction>) {
  return {
    toggle: () => dispatch(toggle()),
  }
}

export default connect(
  mapStateToProps,
  mapPropsToDispatch,
)(Hamburger)
