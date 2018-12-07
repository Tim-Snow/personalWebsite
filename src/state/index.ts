export interface NavigationState {
  type: string
  view: string
}

export interface HamburgerState {
  isOpen: boolean
}

export default interface RootState {
  hamburger: HamburgerState
  navigation: NavigationState
}
