import * as React from 'react'

import HeaderLink from '../header-link'
import Hamburger from '../hamburger'

interface Props {
  type: string
  view: string

  normal: () => void
  game: () => void
  about: () => void
  contact: () => void
  portfolio: () => void
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
      <div
        style={{
          backgroundColor: '#007',
          color: '#FFF',
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          height: '50px',
          padding: '0px',
          top: 0,
          left: 0,
          marginBottom: '20px',
        }}
      >
        <h2 style={{ flexGrow: 2 }}>Tim Snow.</h2>
        {this.state.width >= 768 ? (
          <>
            <HeaderLink
              switcher
              text={type === 'game' ? '🎮' : '📰'}
              cb={this.switchType}
            />
            <HeaderLink
              text="About"
              active={view === 'about'}
              cb={this.props.about}
            />
            <HeaderLink
              text="Portfolio"
              active={view === 'portfolio'}
              cb={this.props.portfolio}
            />
            <HeaderLink
              text="Contact"
              active={view === 'contact'}
              cb={this.props.contact}
            />
          </>
        ) : (
          <Hamburger />
        )}
      </div>
    )
  }

  private updateWidth = () => this.setState({ width: window.innerWidth })

  private switchType = () =>
    this.props.type === 'game' ? this.props.normal() : this.props.game()
}
