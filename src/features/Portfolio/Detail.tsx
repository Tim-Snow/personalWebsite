import React, { useState, useEffect, useMemo } from 'react';
import Collapse from '@material-ui/core/Collapse';

import GithubSvg from 'assets/github.svg';
import PortfolioImages from 'assets/portfolio/images';
import PortfolioContent from 'assets/portfolio';
import A from 'components/A';
import Title from 'components/Title';

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
  title: {
    textTransform: 'capitalize' as 'capitalize',
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
  const [currentPortfolioContent, setCurrentPortfolioContent] = useState<PortfolioContent | undefined>(undefined);
  const [currentPortfolioImage, setCurrentPortfolioImage] = useState<string | undefined>(undefined);

  const prettyTitle = useMemo(() => current?.split('-').join(' '), [current]);

  useEffect(() => {
    if (props.open) {
      setCurrent(props.portfolio?.name);
    }
  }, [props.open, props.portfolio]);
  useEffect(() => {
    if (current) {
      setCurrentPortfolioContent(PortfolioContent[current]);
      setCurrentPortfolioImage(PortfolioImages[current]);
    }
  }, [current]);

  return (
    <Collapse in={props.open} style={styles.container}>
      <div style={styles.details} id="detail">
        {props.open && props.portfolio && current && (
          <div>
            <Title style={styles.title}>{prettyTitle}</Title>
            <img src={currentPortfolioImage} alt={current} style={styles.image} />
            <p>{props.portfolio.description}</p>
            {currentPortfolioContent && (
              <>
                <h3>{currentPortfolioContent.title && currentPortfolioContent.title}</h3>
                {currentPortfolioContent.about.map((element: string, i: number) => (
                  <p key={i}>{element}</p>
                ))}
                <p>Technologies: {currentPortfolioContent.technologies.join(', ')}</p>
                {currentPortfolioContent.ghpages && (
                  <A url={currentPortfolioContent.ghpages}>
                    View in action on Github pages{' '}
                    <img style={styles.icon} src={GithubSvg} alt="View on Github pages" />
                  </A>
                )}
              </>
            )}
            <p>
              <A url={props.portfolio.html_url}>
                View the code on Github <img style={styles.icon} src={GithubSvg} alt="View code on Github" />
              </A>
            </p>
          </div>
        )}
      </div>
    </Collapse>
  );
}
