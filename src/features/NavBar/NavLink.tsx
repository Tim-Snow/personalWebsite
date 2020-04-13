import React from 'react';
import { Link } from 'react-scroll';
import { NAVBAR_MIN_HEIGHT } from 'constants/styles';

interface NavLinkProps {
  text: string;
  sectionId: string;
}

export default function NavLink({ text, sectionId }: NavLinkProps) {
  return (
    <Link to={sectionId} spy={true} smooth={true} offset={-NAVBAR_MIN_HEIGHT} duration={500} style={{ paddingTop: 12 }}>
      {text}
    </Link>
  );
}
