import React from 'react';

import { secondary, textColour } from 'constants/styles';
import boat from 'assets/boat_white.png';
import Title from 'components/Title';
import Content from 'components/Content';

import { content } from './content';
import A from 'components/A';

const styles = {
  container: {
    background: secondary,
    color: textColour,
    maxWidth: 800,
    minHeight: 600,
    textAlign: 'justify',
    padding: 24,
    margin: 24,
  },
  skillsContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexFlow: 'row wrap',
    textAlign: 'left',
  },
} as { [key: string]: React.CSSProperties };

export default function AboutMe() {
  return (
    <div style={styles.container} id="about">
      <Title>{content.sections[0].title}</Title>
      {content.sections[0].content.map((con, i) => (
        <Content key={i}>{con}</Content>
      ))}

      <Title>{content.sections[1].title}</Title>
      <Content>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ paddingRight: 12 }}>
            <h3>{content.sections[1].content[0]}</h3>
            <img src={boat} style={{ width: 48, height: 48 }} alt="Aweigh logo" />
          </div>
          <p>
            <A url="https://aweigh.co.uk/#/">{content.sections[1].content[0]}</A>
            {content.sections[1].content[1]}
            <A url="https://play.google.com/store/apps/details?id=com.aweigh">app</A>{' '}
            <A url="https://apps.apple.com/us/app/aweigh/id1460562069">stores</A>
            {content.sections[1].content[2]}
          </p>
        </div>
      </Content>

      <Title>{content.sections[2].title}</Title>
      <Content>{content.sections[2].content[0]}</Content>
      <div style={styles.skillsContainer}>
        {Object.keys(content.skills).map((lr, i) => (
          <ul key={i}>
            {content.skills[lr].map((skill: string) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
