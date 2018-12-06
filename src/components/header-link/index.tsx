import * as React from 'react'

interface Props {
  text: string
  cb: () => void
  active?: boolean | false
  switcher?: true | false
}

interface State {
  hovering: boolean
}

export default class HeaderLink extends React.Component<Props, State> {
  private defaultStyle = {
    cursor: 'pointer',
  }

  private hoverStyle = {
    ...this.defaultStyle,
    backgroundColor: '#009',
  }

  private switcherStyle = {
    ...this.defaultStyle,
    backgroundColor: '#FFF',
  }

  constructor(props: Props) {
    super(props)

    this.state = {
      hovering: false,
    }
  }

  public render() {
    let style
    this.state.hovering || this.props.active
      ? (style = this.hoverStyle)
      : (style = this.defaultStyle)

    this.props.switcher && (style = this.switcherStyle)

    return (
      <h3
        style={style}
        onMouseOver={this.mouseOver}
        onMouseLeave={this.mouseLeave}
        onClick={this.props.cb}
      >
        {this.props.text}
      </h3>
    )
  }

  private mouseOver = () => this.setState({ hovering: true })

  private mouseLeave = () => this.setState({ hovering: false })
}
