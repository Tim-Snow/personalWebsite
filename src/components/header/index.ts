import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import {
  NavigationAction,
  changeToContact,
  changeToPortfolio,
  changeToAbout,
  changeToGame,
  changeToNormal,
} from '../../state/actions/actions'
import State from '../../state/IState'
import Header from './Component'

function mapStateToProps({ type, view }: State) {
  return { type, view }
}

function mapDispatchToProps(dispatch: Dispatch<NavigationAction>) {
  return {
    normal: () => dispatch(changeToNormal()),
    game: () => dispatch(changeToGame()),
    about: () => dispatch(changeToAbout()),
    contact: () => dispatch(changeToContact()),
    portfolio: () => dispatch(changeToPortfolio()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header)
