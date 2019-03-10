import React from 'react'

import Profile from './components/Profile'
import AboutMe from './components/AboutMe'
import Activity from './components/Activity'
import Contact from './components/Contact'

function App() {
  return (
    <div style={styles.container}>
      <Profile />
      <div style={styles.bottomSection}>
        <AboutMe />
        <Activity />
        <Contact />
      </div>
    </div>
  )
}

const styles = {
  container: {
    backgroundColor: '#CCC',
  },
  bottomSection: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
}

export default App
