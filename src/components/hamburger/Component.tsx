import * as React from 'react'
import './index.css'

interface Props {
  isOpen: boolean

  open: () => void
  close: () => void
}

export default class Hamburger extends React.Component<Props> {
  public render() {
    return (
      <div className="container" onClick={this.click}>
        <div className="bar1" />
        <div className="bar2" />
        <div className="bar3" />
      </div>
    )
  }

  private click = (x: any) => {
    if (this.props.isOpen) {
      this.props.close()
    } else {
      this.props.open()
    }

    // x.classList.toggle('change')
  }
}
