import React from 'react';

import { secondary, radius, textColour } from '../constants/styles';
import boat from '../assets/boat_white.png';

const AboutMe = () => (
  <div style={styles.container}>
    <h2>About me</h2>
    <h4>
      Lead React Native developer for a greenfield corporate mobile banking
      application at Santander, mostly working with Typescript on the front end
      however I can also be found working with Spring boot/Express REST APIs and
      configuring pipelines.
    </h4>
    <p>
      In my free time I am usually working on personal projects, playing with
      new technologies, creating little games for fun, gaming, discovering new
      music, playing guitar and racing quadcopters! (I use Arch BTW)
    </p>
    <h3>Personal Projects</h3>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ paddingRight: 12 }}>
        <h4>Aweigh</h4>
        <img src={boat} style={{ width: 48, height: 48 }} />
      </div>
      <p>
        <a
          href="https://aweigh.co.uk/#/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aweigh
        </a>{' '}
        is a mobile application that helps people stay safe and informed on the
        Norfolk Broads and boasts thousands of downloads despite its infancy.
        Myself and a friend have developed this in our spare time and at
        weekends. It has the full support of The Broads Authority, the Police,
        and all established Boatyards. It's free and on the{' '}
        <a
          href="https://play.google.com/store/apps/details?id=com.aweigh"
          target="_blank"
          rel="noopener noreferrer"
        >
          app
        </a>{' '}
        <a
          href="https://apps.apple.com/us/app/aweigh/id1460562069"
          target="_blank"
          rel="noopener noreferrer"
        >
          stores
        </a>
        , I’d love for you to try it!
      </p>
    </div>
    <p>
      Some other development languages, libraries, frameworks, and technologies
      I have experience with in no particular order:
    </p>
    <div style={styles.skillsContainer}>
      <ul>
        <li>Professional Scrum Developer</li>
        <li>Native Android, Java, Kotlin</li>
        <li>React, Angular, Redux, React Native</li>
        <li>Javascript, Typescript, Node</li>
        <li>Fastlane, Scripting, Automation</li>
      </ul>
      <ul>
        <li>Cloud functions (Firebase), REST APIs</li>
        <li>Linux, MacOS, Windows</li>
        <li>TDD, BDD</li>
        <li>C++</li>
        <li>Git</li>
      </ul>
    </div>
  </div>
);

const styles = {
  container: {
    borderRadius: radius,
    padding: 15,
    background: secondary,
    color: textColour,
    maxWidth: 900,
    minHeight: 600,
    textAlign: 'justify',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'start',
    margin: 10,
  },
  skillsContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexFlow: 'row wrap',
    textAlign: 'left',
  },
};

export default AboutMe;
