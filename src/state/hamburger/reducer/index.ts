import { HamburgerAction } from '../actions'
import { CLOSE, OPEN, TOGGLE } from '../constants'
import { HamburgerState } from '../../index'

export const defaultHamburgerState: HamburgerState = {
  isOpen: false,
}

export function hamburger(
  state: HamburgerState = defaultHamburgerState,
  action: HamburgerAction,
): HamburgerState {
  switch (action.type) {
    case OPEN:
      return { ...state, isOpen: true }
    case CLOSE:
      return { ...state, isOpen: false }
    case TOGGLE:
      return { ...state, isOpen: !state.isOpen }
  }

  return state
}
