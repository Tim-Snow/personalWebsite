import * as React from 'react'

import HeaderLink from '../header-link'
import Hamburger from '../hamburger'

import * as Page from '../../state/constants/pages'

interface Props {
  type: string
  view: string

  about: () => void
  contact: () => void
  portfolio: () => void
  toggle: () => void
}

interface State {
  width: number
}

export default class Header extends React.Component<Props, State> {
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
    const { type, view } = this.props
    return (
      <header
        style={{
          // position: 'fixed',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#007',
          color: '#FFF',
          height: '50px',
          width: '100%',
          padding: '0px',
          top: 0,
          left: 0,
          marginBottom: '20px',
        }}
      >
        <h2 style={{ flex: 1 }}>Tim Snow.</h2>
        {this.state.width >= 768 ? (
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
        ) : (
          <Hamburger />
        )}
      </header>
    )
  }

  private updateWidth = () => this.setState({ width: window.innerWidth })
}
