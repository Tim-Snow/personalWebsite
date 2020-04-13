import React, { useState, useEffect } from 'react';
import Collapse from '@material-ui/core/Collapse';

import GithubSvg from 'assets/github.svg';
import PortfolioImages from 'assets/portfolio/images';
import PortfolioContent from 'assets/portfolio';
import A from 'components/A';

interface Props {
  open: boolean;
  portfolio?: {
    name: string;
    html_url: string;
    description: string;
  };
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  details: {
    margin: 10,
    maxWidth: 800,
  },
  icon: { width: 24 },
  image: {
    maxHeight: 700,
    maxWidth: 600,
  },
};

export default function Detail(props: Props) {
  const [current, setCurrent] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (props.open) {
      setCurrent(props.portfolio?.name);
    }
  }, [props.open, props.portfolio]);

  return (
    <Collapse in={props.open} style={styles.container}>
      <div style={styles.details} id="detail">
        {props.open && props.portfolio && current && (
          <div>
            <h1>{current}</h1>
            <p>
              <A url={props.portfolio.html_url}>
                View the code on Github <img style={styles.icon} src={GithubSvg} alt="View code on Github" />
              </A>
            </p>
            <img src={PortfolioImages[current]} alt={current} style={styles.image} />
            <p>{props.portfolio.description}</p>
            {PortfolioContent[current] && (
              <>
                <h3>{PortfolioContent[current].title && PortfolioContent[current].title}</h3>
                {PortfolioContent[current].about.map((element: string, i: number) => (
                  <p key={i}>{element}</p>
                ))}
                <p>Technologies: {PortfolioContent[current].technologies.join(', ')}</p>
              </>
            )}
          </div>
        )}
      </div>
    </Collapse>
  );
}
