import React, { useState, useEffect, useMemo, useCallback } from 'react';
import Collapse from '@material-ui/core/Collapse';

import A from 'components/A';
import Title from 'components/Title';
import { WithSpinner } from 'components/Spinner';

import PortfolioImages from 'assets/portfolio/images';
import PortfolioContent, { ProjectName } from 'assets/portfolio';
import icons from 'assets';
import style from './style';
import { usePortfolioDispatch, usePortfolioState } from '../usePortfolio';
import { Fade } from '@material-ui/core';

export default function Detail() {
  const { detailShowing, portfolios, selected } = usePortfolioState();
  const dispatch = usePortfolioDispatch();
  const [current, setCurrent] = useState<ProjectName | undefined>(undefined);
  const [currentPortfolioContent, setCurrentPortfolioContent] = useState<PortfolioContent | undefined>(undefined);
  const [currentPortfolioImage, setCurrentPortfolioImage] = useState<string | undefined>(undefined);
  const [imageLoaded, setImageLoaded] = useState(false);
  const setLoaded = useCallback(() => setImageLoaded(true), []);
  const prettyTitle = useMemo(() => current?.split('-').join(' '), [current]);

  useEffect(() => {
    if (detailShowing && portfolios) {
      setCurrent(portfolios[selected]?.name);
    }
  }, [detailShowing, portfolios, selected]);
  useEffect(() => {
    if (current) {
      setImageLoaded(false);
      setCurrentPortfolioContent(PortfolioContent[current]);
      setCurrentPortfolioImage(PortfolioImages[current]);
    }
  }, [current]);

  return (
    <Collapse in={detailShowing} style={style.container}>
      <div style={style.details} id="detail">
        {detailShowing && portfolios && current && (
          <div>
            <div style={{ display: 'flex', flex: 1, justifyContent: 'space-between' }}>
              <Fade in={selected !== 0}>
                <div
                  onClick={() => {
                    dispatch({ type: 'prev' });
                  }}
                  style={style.arrow}
                >
                  <h1>{'<'}</h1>
                </div>
              </Fade>
              <Title style={style.title}>{prettyTitle}</Title>
              <Fade in={selected !== portfolios.length - 1}>
                <div
                  onClick={() => {
                    dispatch({ type: 'next' });
                  }}
                  style={style.arrow}
                >
                  <h1>{'>'}</h1>
                </div>
              </Fade>
            </div>
            <div>
              {currentPortfolioImage && (
                <WithSpinner loading={!imageLoaded}>
                  <img src={currentPortfolioImage} onLoad={setLoaded} alt={current} style={style.image} />
                </WithSpinner>
              )}
              <p>{portfolios[selected].description}</p>
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
                <A url={portfolios[selected].html_url}>
                  View the code on Github <img style={style.icon} src={icons['github']} alt="View code on Github" />
                </A>
              </p>
            </div>
          </div>
        )}
      </div>
    </Collapse>
  );
}
