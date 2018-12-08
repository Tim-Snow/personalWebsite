import * as React from 'react'

import HeaderLink from '../header-link'
import Hamburger from '../hamburger'

import * as Page from '../../constants/pages'
import { COLOUR_SECONDARY, COLOUR_MAIN } from '../../constants/colours'

export interface Props {
  type: string
  view: string
  largeScreen: boolean

  home: () => void
  about: () => void
  contact: () => void
  portfolio: () => void
  toggle: () => void

  setLargeScreen: () => void
  setSmallScreen: () => void
}

export default class Header extends React.Component<Props> {
  public componentWillMount() {
    this.updateWidth()
  }

  public componentDidMount() {
    window.addEventListener('resize', this.updateWidth)
  }

  public componentWillUnmount() {
    window.removeEventListener('resize', this.updateWidth)
  }

  public render() {
    const { type, view, largeScreen } = this.props
    const titleStyle = largeScreen
      ? { flex: 1, cursor: 'pointer' }
      : { flex: 3, cursor: 'pointer' }
    // change header from flex if small to center text

    return (
      <header
        style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: COLOUR_MAIN,
          color: COLOUR_SECONDARY,
          height: '50px',
          width: '100%',
          padding: '0px',
          top: 0,
          left: 0,
          marginBottom: '20px',
        }}
      >
        <h2 style={titleStyle} onClick={this.props.home}>
          Tim Snow.
        </h2>

        {largeScreen && (
          <nav
            style={{ display: 'flex', flex: 1, justifyContent: 'space-around' }}
          >
            <HeaderLink
              switcher
              text={type === Page.GAME ? '🎮' : '📰'}
              cb={this.props.toggle}
            />
            <HeaderLink
              text="About"
              active={view === Page.ABOUT}
              cb={this.props.about}
            />
            <HeaderLink
              text="Portfolio"
              active={view === Page.PORTFOLIO}
              cb={this.props.portfolio}
            />
            <HeaderLink
              text="Contact"
              active={view === Page.CONTACT}
              cb={this.props.contact}
            />
          </nav>
        )}
        {largeScreen || <Hamburger />}
      </header>
    )
  }

  private updateWidth = () => {
    if (window.innerWidth >= 768) {
      this.props.setLargeScreen()
    } else {
      this.props.setSmallScreen()
    }
  }
}
