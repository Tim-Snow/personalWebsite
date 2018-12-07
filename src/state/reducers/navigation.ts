import { NavigationAction } from '../actions/navigation'
import {
  CHANGE_TO_GAME,
  CHANGE_TO_NORMAL,
  CHANGE_TO_ABOUT,
  CHANGE_TO_PORTFOLIO,
  CHANGE_TO_CONTACT,
  TOGGLE_TYPE,
} from '../constants/navigation'
import * as Page from '../constants/pages'
import { NavigationState } from '../index'

const defaultState: NavigationState = {
  type: Page.NORMAL,
  view: Page.ABOUT,
}

export function navigation(
  state: NavigationState = defaultState,
  action: NavigationAction,
): NavigationState {
  switch (action.type) {
    case CHANGE_TO_GAME:
      return { ...state, type: Page.GAME }
    case CHANGE_TO_NORMAL:
      return { ...state, type: Page.NORMAL }
    case CHANGE_TO_ABOUT:
      return { ...state, view: Page.ABOUT }
    case CHANGE_TO_PORTFOLIO:
      return { ...state, view: Page.PORTFOLIO }
    case CHANGE_TO_CONTACT:
      return { ...state, view: Page.CONTACT }
    case TOGGLE_TYPE:
      if (state.type === Page.GAME) {
        return { ...state, type: Page.NORMAL }
      } else {
        return { ...state, type: Page.GAME }
      }
  }

  return state
}
