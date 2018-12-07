import * as React from 'react'

interface Props {
  about: () => void
  contact: () => void
  portfolio: () => void
}

export default class HamburgerMenu extends React.Component<Props> {
  public render() {
    return (
      <div className="modal">
        <h3 style={{ cursor: 'pointer' }} onClick={this.props.about}>
          About
        </h3>
        <h3 style={{ cursor: 'pointer' }} onClick={this.props.portfolio}>
          Portfolio
        </h3>
        <h3 style={{ cursor: 'pointer' }} onClick={this.props.contact}>
          Contact
        </h3>
      </div>
    )
  }
}
