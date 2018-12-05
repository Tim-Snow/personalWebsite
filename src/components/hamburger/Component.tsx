import * as React from 'react'
import './index.css'

export default class Hamburger extends React.Component {
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
    x.classList.toggle('change')
  }
}
