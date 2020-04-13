import { Icon } from 'assets';

export type BasicItem = {
  key: number;
  icon: Icon;
  text?: string;
  linkText?: string;
  link?: string;
};

export const items: BasicItem[] = [
  {
    key: 0,
    text: 'BSc (Hons) in Computer Science (Games)',
    icon: 'grad',
  },
  {
    key: 1,
    text: 'Find me on',
    linkText: 'Github',
    link: 'https://github.com/Tim-Snow',
    icon: 'github',
  },
  {
    key: 2,
    linkText: 'Email me',
    link: 'mailto:me@timsnow.dev?subject=Hello world!',
    icon: 'email',
  },
];
