import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import {
  NavigationAction,
  changeToContact,
  changeToPortfolio,
  changeToAbout,
  toggleType,
} from '../../state/actions/navigation'
import Header from './Component'

function mapStateToProps(state: any) {
  return { type: state.navigation.type, view: state.navigation.view }
}

function mapDispatchToProps(dispatch: Dispatch<NavigationAction>) {
  return {
    about: () => dispatch(changeToAbout()),
    contact: () => dispatch(changeToContact()),
    portfolio: () => dispatch(changeToPortfolio()),
    toggle: () => dispatch(toggleType()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header)
