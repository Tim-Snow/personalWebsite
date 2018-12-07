import * as React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import './index.css'
import HamburgerMenu from '../hamburger-menu'

interface Props {
  isOpen: boolean

  toggle: () => void
}

export default class Hamburger extends React.Component<Props> {
  public render() {
    return (
      <>
        <div className="container" onClick={this.click}>
          <TransitionGroup className={(this.props.isOpen && 'change') || ''}>
            <CSSTransition classNames="bar1" timeout={500}>
              <div className="bar1" />
            </CSSTransition>
            <CSSTransition classNames="bar2" timeout={500}>
              <div className="bar2" />
            </CSSTransition>
            <CSSTransition classNames="bar3" timeout={500}>
              <div className="bar3" />
            </CSSTransition>
          </TransitionGroup>
        </div>

        {this.props.isOpen && <HamburgerMenu />}
      </>
    )
  }

  private click = () => this.props.toggle()
}
