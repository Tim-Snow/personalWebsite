import React from 'react';
import { radius, textColour, main, secondary } from '../constants/styles';
import GithubSvg from '../assets/github.svg';

export default function PortfolioItem({ id, title, details, callback }) {
  return (
    <div style={styles.container} onClick={() => callback(id)}>
      <h4>{title}</h4>
      <p>{details}</p>
      <img style={{ width: 56 }} src={GithubSvg} alt="Github" />
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: secondary,
    borderColor: main,
    borderStyle: 'solid',
    borderWidth: 2,
    color: textColour,
    minWidth: 250,
    minHeight: 250,
    margin: 15,
    padding: 10,
    overflow: 'hidden',
    borderRadius: radius,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
};
