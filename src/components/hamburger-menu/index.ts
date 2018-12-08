import { Dispatch } from 'redux'
import { connect } from 'react-redux'

import HamburgerMenu from './Component'
import { NavigationAction } from '../../state/navigation/actions'
import { HamburgerAction } from '../../state/hamburger/actions'
import {
  changeToAbout,
  changeToContact,
  changeToPortfolio,
} from '../../state/navigation/actions'
import { close } from '../../state/hamburger/actions'

function mapStateToProps({  }: any) {
  return {}
}

function mapPropsToDispatch(
  dispatch: Dispatch<NavigationAction | HamburgerAction>,
) {
  return {
    about: () => dispatch(changeToAbout()),
    contact: () => dispatch(changeToContact()),
    portfolio: () => dispatch(changeToPortfolio()),
    close: () => dispatch(close()),
  }
}

export default connect(
  mapStateToProps,
  mapPropsToDispatch,
)(HamburgerMenu)
