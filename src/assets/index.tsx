import EmailSvg from 'assets/email.svg';
import WorkSvg from 'assets/business.svg';
import LocationSvg from 'assets/location.svg';
import GithubSvg from 'assets/github.svg';
import GraduatedSvg from 'assets/graduated.svg';

const icons = {
  email: EmailSvg,
  work: WorkSvg,
  location: LocationSvg,
  github: GithubSvg,
  grad: GraduatedSvg,
};

export default icons;

export type Icon = keyof typeof icons;
