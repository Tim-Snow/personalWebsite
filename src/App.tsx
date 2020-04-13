import React from 'react';

import Profile from 'features/Profile';
import AboutMe from 'features/AboutMe';
import Activity from 'features/Activity';
import Portfolio from 'features/Portfolio';
import NavBar from 'features/NavBar';

import { background, NAVBAR_MAX_HEIGHT } from 'constants/styles';

const styles = {
  container: {
    backgroundColor: background,
    paddingTop: NAVBAR_MAX_HEIGHT,
  },
  splitSection: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
} as { [key: string]: React.CSSProperties };

export default function App() {
  return (
    <div style={styles.container} id="home">
      <Profile />
      <Portfolio />
      <div style={styles.splitSection}>
        <AboutMe />
        <Activity />
      </div>
      <NavBar />
    </div>
  );
}
