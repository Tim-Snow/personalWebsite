import React from 'react'
import { radius, textColour, background } from '../constants/styles'

const PortfolioItem = props => (
  <div
    style={styles.container}
    onClick={props.callback(props.id)}
    key={props.key}
  >
    <h4>{props.title}</h4>
    <p>{props.details}</p>
  </div>
)

const styles = {
  container: {
    backgroundColor: background,
    color: textColour,
    minWidth: 250,
    minHeight: 250,
    margin: 15,
    overflow: 'hidden',
    borderRadius: radius,
  },
}

export default PortfolioItem
