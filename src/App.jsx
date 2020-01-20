import React from 'react';

import Profile from './components/Profile';
import AboutMe from './components/AboutMe';
import Activity from './components/Activity';
import Portfolio from './components/Portfolio';

import { background } from './constants/styles';

function App() {
  return (
    <div style={styles.container}>
      <Profile />
      <div style={styles.splitSection}>
        <AboutMe style={styles.about} />
        <Activity style={styles.activity} />
      </div>
      <Portfolio />
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: background,
  },
  splitSection: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  about: {
    flex: 2,
  },
  activity: {
    flex: 1,
  },
};

export default App;
