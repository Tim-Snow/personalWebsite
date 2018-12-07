import { Dispatch } from 'redux'
import { connect } from 'react-redux'

import HamburgerMenu from './Component'
import { NavigationAction } from '../../state/actions/navigation'
import {
  changeToAbout,
  changeToContact,
  changeToPortfolio,
} from '../../state/actions/navigation'

function mapStateToProps({  }: any) {
  return {}
}

function mapPropsToDispatch(dispatch: Dispatch<NavigationAction>) {
  return {
    about: () => dispatch(changeToAbout()),
    contact: () => dispatch(changeToContact()),
    portfolio: () => dispatch(changeToPortfolio()),
  }
}

export default connect(
  mapStateToProps,
  mapPropsToDispatch,
)(HamburgerMenu)
