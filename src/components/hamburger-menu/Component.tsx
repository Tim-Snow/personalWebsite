import * as React from 'react'

interface Props {
  about: () => void
  contact: () => void
  portfolio: () => void
  close: () => void
}

export default class HamburgerMenu extends React.Component<Props> {
  public render() {
    return (
      <div className="modal">
        <h3 style={{ cursor: 'pointer' }} onClick={this.about}>
          About
        </h3>
        <h3 style={{ cursor: 'pointer' }} onClick={this.portfolio}>
          Portfolio
        </h3>
        <h3 style={{ cursor: 'pointer' }} onClick={this.contact}>
          Contact
        </h3>
      </div>
    )
  }

  private about = () => {
    this.props.about()
    this.props.close()
  }

  private contact = () => {
    this.props.contact()
    this.props.close()
  }

  private portfolio = () => {
    this.props.portfolio()
    this.props.close()
  }
}
