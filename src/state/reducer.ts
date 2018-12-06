import { combineReducers } from 'redux'
import { hamburger } from './reducers/hamburger'
import { navigation } from './reducers/navigation'

export const rootReducer = combineReducers({
  navigation,
  hamburger,
})
