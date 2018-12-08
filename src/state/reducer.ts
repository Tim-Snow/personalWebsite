import { combineReducers } from 'redux'
import { hamburger } from './hamburger/reducer'
import { navigation } from './navigation/reducer'

export const rootReducer = combineReducers({
  navigation,
  hamburger,
})
