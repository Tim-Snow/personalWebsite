import email from 'assets/email.svg';
import work from 'assets/business.svg';
import location from 'assets/location.svg';
import github from 'assets/github.svg';
import question from 'assets/question.svg';
import grad from 'assets/graduated.svg';
import error from 'assets/error.png';
import boat from 'assets/boat_white.png';

export const icons = {
  email,
  work,
  location,
  github,
  grad,
  question,
  error,
  boat,
};

export default icons;

export type Icon = keyof typeof icons;
