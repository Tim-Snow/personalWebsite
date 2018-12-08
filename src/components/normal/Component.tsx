import * as React from 'react'

import Home from '../home'
import About from '../about'
import Contact from '../contact'
import Portfolio from '../portfolio'

import * as Page from '../../constants/pages'

interface Props {
  view: string
}

export default class Normal extends React.Component<Props> {
  public render() {
    return (
      <div>
        {this.props.view === Page.HOME && <Home />}
        {this.props.view === Page.ABOUT && <About />}
        {this.props.view === Page.CONTACT && <Contact />}
        {this.props.view === Page.PORTFOLIO && <Portfolio />}
      </div>
    )
  }
}
