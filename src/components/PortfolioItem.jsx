import React from 'react'
import { radius } from '../constants/styles'

function PortfolioItem(props) {
  const click = () => props.callback(props.id)

  return (
    <div style={styles.container} onClick={click}>
      <h4>{props.title}</h4>
      <p>{props.details}</p>
    </div>
  )
}

const styles = {
  container: {
    backgroundColor: '#333',
    color: '#FFF',
    minWidth: 250,
    minHeight: 250,
    margin: 15,
    overflow: 'hidden',
    borderRadius: radius,
  },
}

export default PortfolioItem
