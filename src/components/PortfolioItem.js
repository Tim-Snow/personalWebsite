import React from 'react'

function PortfolioItem(props) {
  const click = () => props.callback(props.id)

  return (
    <div style={styles.container} onClick={click}>
      <h4>{props.title}</h4>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </div>
  )
}

const styles = {
  container: {
    backgroundColor: '#333',
    color: '#FFF',
    maxWidth: 250,
    maxHeight: 250,
    margin: 15,
    overflow: 'hidden',
  },
}

export default PortfolioItem
