import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import {
  NavigationAction,
  changeToContact,
  changeToPortfolio,
  changeToAbout,
  toggleType,
} from '../../state/actions/navigation'
import { NavigationState } from '../../state/index'
import Header from './Component'

function mapStateToProps({ type, view }: NavigationState) {
  return { type, view }
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
