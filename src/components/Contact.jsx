import React from 'react'

import Button from '@material-ui/core/Button'

const Contact = () => {
  return (
    <div style={styles.container}>
      <h2>Contact me</h2>
      <form style={styles.form}>
        <input
          style={styles.margin}
          placeholder="Your name"
          type="text"
          name="name"
        />
        <input
          style={styles.margin}
          type="text"
          placeholder="Subject"
          name="subject"
        />
        <textarea
          style={styles.margin}
          placeholder="Your message"
          rows="8"
          cols="80"
          name="message"
        />

        <Button variant="contained" color="primary" style={styles.margin}>
          Send
        </Button>
      </form>
    </div>
  )
}

const styles = {
  container: {
    borderRadius: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#DFDFDF',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  margin: {
    margin: 5,
  },
}

export default Contact
