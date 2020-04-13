type Section = {
  title: string;
  content: string[];
};

export type Content = {
  sections: Section[];
  skills: {
    left: string[];
    right: string[];
  };
};

export const content: Content = {
  sections: [
    {
      title: 'About',
      content: [
        "Hey, I'm a software developer at Santander, mainly specializing on mobile development. I am a React Native enthusiast and I am lucky enough to be using it day to day to create stunning user experiences. I'm a sucker for animations!",
        'In my free time I am usually working on personal projects, playing with new technologies, creating little games for fun, gaming, discovering new music, playing guitar and racing quadcopters! (I use Arch BTW)',
      ],
    },
    {
      title: 'Personal Projects',
      content: [
        'Aweigh',
        " is a mobile application that helps people stay safe and informed on the Norfolk Broads and boasts thousands of downloads despite its infancy. Myself and a friend have developed this in our spare time and at weekends. It has the full support of The Broads Authority, the Police, and all established Boatyards. It's free and on the ",
        ", I'd love for you to try it!",
      ],
    },
    {
      title: 'Other',
      content: [
        'Some other development languages, libraries, frameworks, and technologies I have experience with in no particular order:',
      ],
    },
  ],
  skills: {
    left: [
      'Professional Scrum Developer',
      'Native Android, Java, Kotlin',
      'React, Angular, Redux, React Native',
      'Javascript, Typescript, Node',
      'Fastlane, Scripting, Automation',
    ],
    right: ['Cloud functions (Firebase), REST APIs', 'Linux, MacOS, Windows', 'TDD, BDD', 'C++', 'Git'],
  },
};
