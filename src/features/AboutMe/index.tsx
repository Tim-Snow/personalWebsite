import React from 'react';

import Title from 'components/Title';
import Content from 'components/Content';
import A from 'components/A';
import Img from 'components/Img';

import { content } from './content';
import style from './style';

export default function AboutMe() {
  return (
    <div style={style.container} id="about">
      <Title>{content.sections[0].title}</Title>
      {content.sections[0].content.map((con, i) => (
        <Content key={i}>{con}</Content>
      ))}

      <Title>{content.sections[1].title}</Title>
      <Content>
        <div style={style.content}>
          <div style={style.aweighContainer}>
            <h3>{content.sections[1].content[0]}</h3>
            <Img src="boat" width={48} alt="Aweigh logo" />
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
      <div style={style.skillsContainer}>
        {Object.keys(content.skills).map((lr, i) => (
          <ul key={i}>
            {content.skills[lr as 'left' | 'right'].map((skill: string) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
