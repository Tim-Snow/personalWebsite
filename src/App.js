import React from 'react'

import Profile from './components/Profile'
import AboutMe from './components/AboutMe'
import Activity from './components/Activity'

function App() {
  return (
    <div className="App">
      <Profile />
      <div style={styles.bottomSection}>
        <AboutMe />
        <Activity />
      </div>
    </div>
  )
}

const styles = {
  bottomSection: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
}

export default App
