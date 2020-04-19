import React, { useState, useEffect, useMemo, useCallback } from 'react';
import Collapse from '@material-ui/core/Collapse';

import A from 'components/A';
import Title from 'components/Title';
import { WithSpinner } from 'components/Spinner';

import PortfolioImages from 'assets/portfolio/images';
import PortfolioContent, { ProjectName } from 'assets/portfolio';
import icons from 'assets';
import style from './style';

interface Props {
  open: boolean;
  portfolio?: {
    name: ProjectName;
    html_url: string;
    description: string;
  };
}

export default function Detail(props: Props) {
  const [current, setCurrent] = useState<ProjectName | undefined>(undefined);
  const [currentPortfolioContent, setCurrentPortfolioContent] = useState<PortfolioContent | undefined>(undefined);
  const [currentPortfolioImage, setCurrentPortfolioImage] = useState<string | undefined>(undefined);
  const [imageLoaded, setImageLoaded] = useState(false);
  const setLoaded = useCallback(() => setImageLoaded(true), []);
  const prettyTitle = useMemo(() => current?.split('-').join(' '), [current]);

  useEffect(() => {
    if (props.open) {
      setCurrent(props.portfolio?.name);
    }
  }, [props.open, props.portfolio]);
  useEffect(() => {
    if (current) {
      setImageLoaded(false);
      setCurrentPortfolioContent(PortfolioContent[current]);
      setCurrentPortfolioImage(PortfolioImages[current]);
    }
  }, [current]);

  return (
    <Collapse in={props.open} style={style.container}>
      <div style={style.details} id="detail">
        {props.open && props.portfolio && current && (
          <div>
            <Title style={style.title}>{prettyTitle}</Title>
            {currentPortfolioImage && (
              <WithSpinner loading={!imageLoaded}>
                <img src={currentPortfolioImage} onLoad={setLoaded} alt={current} style={style.image} />
              </WithSpinner>
            )}
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
                    <img style={style.icon} src={icons['github']} alt="View on Github pages" />
                  </A>
                )}
              </>
            )}
            <p>
              <A url={props.portfolio.html_url}>
                View the code on Github <img style={style.icon} src={icons['github']} alt="View code on Github" />
              </A>
            </p>
          </div>
        )}
      </div>
    </Collapse>
  );
}
