export interface NavigationState {
  type: string
  view: string
}

export interface HamburgerState {
  open: boolean
}

export default interface RootState {
  hamburger: HamburgerState
  navigation: NavigationState
}
