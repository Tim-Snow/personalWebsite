import * as React from 'react'
import { COLOUR_SECONDARY, COLOUR_MAIN } from '../../constants/colours'

interface Props {
  title: string
}

interface State {
  expanded: boolean
}

export default class PortfolioItem extends React.Component<Props, State> {
  public constructor(props: any) {
    super(props)

    this.state = {
      expanded: false,
    }
  }
  public render() {
    const style = {
      color: COLOUR_SECONDARY,
      backgroundColor: COLOUR_MAIN,
      width: '150px',
      height: '150px',
      display: 'inline-block',
      margin: '5px',
    }
    return (
      <div>
        <p style={style} onClick={this.toggle}>
          {this.props.title}
        </p>
      </div>
    )
  }

  private toggle = () => (this.state.expanded ? this.shrink() : this.expand())
  private expand = () => this.setState({ expanded: true })
  private shrink = () => this.setState({ expanded: false })
}
