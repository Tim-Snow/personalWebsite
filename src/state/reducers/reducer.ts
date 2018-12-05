import { NavigationAction } from '../actions/actions'
import {
  CHANGE_TO_GAME,
  CHANGE_TO_NORMAL,
  CHANGE_TO_ABOUT,
  CHANGE_TO_PORTFOLIO,
  CHANGE_TO_CONTACT,
} from '../constants/action-types'
import State from '../IState'

export function navigation(state: State, action: NavigationAction): State {
  switch (action.type) {
    case CHANGE_TO_GAME:
      return { ...state, type: 'game' }
    case CHANGE_TO_NORMAL:
      return { ...state, type: 'normal' }
    case CHANGE_TO_ABOUT:
      return { ...state, view: 'about' }
    case CHANGE_TO_PORTFOLIO:
      return { ...state, view: 'portfolio' }
    case CHANGE_TO_CONTACT:
      return { ...state, view: 'contact' }
  }

  return state
}
