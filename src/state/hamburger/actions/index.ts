import * as Actions from '../constants'

export interface Open {
  type: Actions.OPEN
}

export interface Close {
  type: Actions.CLOSE
}

export interface Toggle {
  type: Actions.TOGGLE
}

export type HamburgerAction = Open | Close | Toggle

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

export function toggle(): Toggle {
  return {
    type: Actions.TOGGLE,
  }
}
