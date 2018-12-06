import * as Actions from '../constants/hamburger-action-types'

export interface Open {
  type: Actions.OPEN
}

export interface Close {
  type: Actions.CLOSE
}

export type HamburgerAction = Open | Close

export function open(): Open {
  return {
    type: Actions.OPEN,
  }
}

export function close(): Close {
  return {
    type: Actions.CLOSE,
  }
}
