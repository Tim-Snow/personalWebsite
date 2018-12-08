import * as Actions from '../constants'

export interface ChangeToGame {
  type: Actions.CHANGE_TO_GAME
}

export interface ChangeToNormal {
  type: Actions.CHANGE_TO_NORMAL
}

export interface ChangeToAbout {
  type: Actions.CHANGE_TO_ABOUT
}

export interface ChangeToPortfolio {
  type: Actions.CHANGE_TO_PORTFOLIO
}

export interface ChangeToContact {
  type: Actions.CHANGE_TO_CONTACT
}

export interface ToggleType {
  type: Actions.TOGGLE_TYPE
}

export interface SetLargeScreen {
  type: Actions.SET_LARGE_SCREEN
}

export interface SetSmallScreen {
  type: Actions.SET_SMALL_SCREEN
}

export type NavigationAction =
  | ChangeToGame
  | ChangeToNormal
  | ChangeToAbout
  | ChangeToContact
  | ChangeToPortfolio
  | ToggleType
  | SetLargeScreen
  | SetSmallScreen

export function changeToGame(): ChangeToGame {
  return {
    type: Actions.CHANGE_TO_GAME,
  }
}

export function changeToNormal(): ChangeToNormal {
  return {
    type: Actions.CHANGE_TO_NORMAL,
  }
}

export function changeToAbout(): ChangeToAbout {
  return {
    type: Actions.CHANGE_TO_ABOUT,
  }
}

export function changeToPortfolio(): ChangeToPortfolio {
  return {
    type: Actions.CHANGE_TO_PORTFOLIO,
  }
}

export function changeToContact(): ChangeToContact {
  return {
    type: Actions.CHANGE_TO_CONTACT,
  }
}

export function toggleType(): ToggleType {
  return {
    type: Actions.TOGGLE_TYPE,
  }
}

export function setLargeScreen(): SetLargeScreen {
  return {
    type: Actions.SET_LARGE_SCREEN,
  }
}

export function setSmallScreen(): SetSmallScreen {
  return {
    type: Actions.SET_SMALL_SCREEN,
  }
}
