import React, { useEffect, useState } from 'react';

import { background, main, textColour, NAVBAR_MAX_HEIGHT, NAVBAR_MIN_HEIGHT } from 'constants/styles';
import useScroll from 'hooks/useScroll';
import NavLink from './NavLink';

export default function NavBar() {
  const scroll = useScroll();
  const [shrink, setShrink] = useState(0);
  useEffect(() => {
    setShrink(scroll / 2);
  }, [scroll]);

  return (
    <div
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        right: 0,
        height: NAVBAR_MAX_HEIGHT - shrink,
        minHeight: NAVBAR_MIN_HEIGHT,
        background: `linear-gradient(${background}, ${main})`,
        display: 'flex',
        justifyContent: 'space-around',
        color: textColour,
        fontSize: 24,
      }}
    >
      <NavLink text="Home" sectionId="home" />
      <NavLink text="Portfolio" sectionId="portfolio" />
      <NavLink text="About" sectionId="about" />
      <NavLink text="Activity" sectionId="activity" />
    </div>
  );
}
