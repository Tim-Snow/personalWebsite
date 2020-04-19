import finalYearProject from './final-year-project.jpg';
import gameOfLife from './game-of-life.png';
import pacmanPython from './pacman.jpg';
import personalWebsite from './personal-website.jpg';
import plainSailing from './plain-sailing.jpg';
import scientistBrawl from './scientist-brawl.gif';
import snake from './snake.jpg';
import { ProjectName } from '..';

const images: { [key in ProjectName]: string | undefined } = {
  'final-year-project': finalYearProject,
  'game-of-life': gameOfLife,
  pacman: pacmanPython,
  'personal-website': personalWebsite,
  'plain-sailing': plainSailing,
  'scientist-brawl': scientistBrawl,
  snake,
  'home-monitor': undefined,
  'pong-server-and-client': undefined,
  sumo: undefined,
};

export default images;
