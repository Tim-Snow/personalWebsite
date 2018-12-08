import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import {
  NavigationAction,
  changeToContact,
  changeToPortfolio,
  changeToAbout,
  toggleType,
  setLargeScreen as setLarge,
  setSmallScreen as setSmall,
  changeToHome,
} from '../../state/navigation/actions'
import RootState from '../../state/index'
import Header from './Component'

function mapStateToProps(state: RootState) {
  return {
    type: state.navigation.type,
    view: state.navigation.view,
    largeScreen: state.navigation.largeScreen,
  }
}

function mapDispatchToProps(dispatch: Dispatch<NavigationAction>) {
  return {
    home: () => dispatch(changeToHome()),
    about: () => dispatch(changeToAbout()),
    contact: () => dispatch(changeToContact()),
    portfolio: () => dispatch(changeToPortfolio()),
    toggle: () => dispatch(toggleType()),
    setLargeScreen: () => dispatch(setLarge()),
    setSmallScreen: () => dispatch(setSmall()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header)
