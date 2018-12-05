import { createStore } from 'redux'
import { navigation } from './reducers/reducer'
import { NavigationAction } from './actions/actions'
import State from './IState'

const store = createStore<State, NavigationAction, any, any>(navigation, {
  type: 'normal',
  view: 'about',
})

export default store
