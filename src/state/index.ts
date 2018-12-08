export interface NavigationState {
  type: string
  view: string
  largeScreen: boolean
}

export interface HamburgerState {
  isOpen: boolean
}

export default interface RootState {
  hamburger: HamburgerState
  navigation: NavigationState
}
