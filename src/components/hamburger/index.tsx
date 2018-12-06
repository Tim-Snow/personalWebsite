import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { HamburgerAction, close, open } from '../../state/actions/hamburger'

import Hamburger from './Component'

function mapStateToProps(state: any) {
  return { isOpen: state.hamburger.open }
}

function mapPropsToDispatch(dispatch: Dispatch<HamburgerAction>) {
  return {
    open: () => dispatch(open()),
    close: () => dispatch(close()),
  }
}

export default connect(
  mapStateToProps,
  mapPropsToDispatch,
)(Hamburger)
