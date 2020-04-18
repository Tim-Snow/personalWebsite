import email from 'assets/email.svg';
import work from 'assets/business.svg';
import location from 'assets/location.svg';
import github from 'assets/github.svg';
import question from 'assets/question.svg';
import grad from 'assets/graduated.svg';

const icons = {
  email,
  work,
  location,
  github,
  grad,
  question,
};

export default icons;

export type Icon = keyof typeof icons;
