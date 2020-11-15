import React from 'react';
import { Fade, Collapse } from '@material-ui/core';
import A from 'components/A';
import Title from 'components/Title';
import icons from 'assets';
import style from './style';
import { usePortfolioDispatch, usePortfolioState } from '../usePortfolio';

function DetailTitleWithNav({ name, totalPortfolios }: { name: string; totalPortfolios: number }) {
  const { selected } = usePortfolioState();
  const dispatch = usePortfolioDispatch();
  const prev = () => dispatch({ type: 'prev' });
  const next = () => dispatch({ type: 'next' });
  return (
    <div style={{ display: 'flex', flex: 1, justifyContent: 'space-between' }}>
      <Fade in={selected !== 0}>
        <button onClick={prev} style={style.arrow}>
          <h1>{'<'}</h1>
        </button>
      </Fade>
      <Title style={style.title}>{name}</Title>
      <Fade in={selected !== totalPortfolios}>
        <button onClick={next} style={style.arrow}>
          <h1>{'>'}</h1>
        </button>
      </Fade>
    </div>
  );
}

export default function Detail() {
  const { selected, portfolios, current } = usePortfolioState();
  const dispatch = usePortfolioDispatch();
  const close = () => dispatch({ type: 'close' });
  return current ? (
    <Collapse in={selected !== -1} style={style.container}>
      <section style={style.details} id="detail">
        <DetailTitleWithNav
          name={current.fromGit.name.replace(/-/g, ' ')}
          totalPortfolios={portfolios ? portfolios.length - 1 : 0}
        />
        {current.image && <img src={current.image} alt={current.fromGit.name} style={style.image} />}
        {current.extraContent.about.map((element: string, i: number) => (
          <p key={i}>{element}</p>
        ))}
        <p>Language: {current.fromGit.language}</p>
        {current.fromGit.homepage && (
          <A url={current.fromGit.homepage}>
            View in action on Github pages <img style={style.icon} src={icons['github']} alt="View on Github pages" />
          </A>
        )}
        <p>
          <A url={current.fromGit.html_url}>
            View the code on Github <img style={style.icon} src={icons['github']} alt="View code on Github" />
          </A>
        </p>
        <button onClick={close} style={{ ...style.arrow, fontSize: 14 }}>
          <h2>Close</h2>
        </button>
      </section>
    </Collapse>
  ) : (
    <></>
  );
}
