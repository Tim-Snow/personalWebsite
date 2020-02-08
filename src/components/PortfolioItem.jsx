import React from 'react';
import { radius, textColour, background } from '../constants/styles';

export default function PortfolioItem({ id, title, details, callback }) {
  return (
    <div style={styles.container} onClick={() => callback(id)}>
      <h4>{title}</h4>
      <p>{details}</p>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: background,
    color: textColour,
    minWidth: 250,
    minHeight: 250,
    margin: 15,
    overflow: 'hidden',
    borderRadius: radius,
  },
};
