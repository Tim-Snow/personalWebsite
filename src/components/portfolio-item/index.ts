import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { NavigationAction } from '../../state/actions/navigation'
import { NavigationState } from '../../state'
import PortfolioItem from './Component'

function mapStateToProps({  }: NavigationState) {
  return {}
}

function mapDispatchToProps(dispatch: Dispatch<NavigationAction>) {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PortfolioItem)
