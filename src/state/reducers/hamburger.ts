import { HamburgerAction } from '../actions/hamburger'
import { CLOSE, OPEN } from '../constants/hamburger-action-types'
import { HamburgerState } from '../index'

export const defaultHamburgerState: HamburgerState = {
  open: false,
}

export function hamburger(
  state: HamburgerState = defaultHamburgerState,
  action: HamburgerAction,
): HamburgerState {
  switch (action.type) {
    case OPEN:
      return { ...state, open: true }
    case CLOSE:
      return { ...state, open: false }
  }

  return state
}
