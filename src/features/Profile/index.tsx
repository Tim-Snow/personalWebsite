import React, { useMemo } from 'react';

import { WithSpinner } from 'components/Spinner';
import Table from 'components/Table';
import Title from 'components/Title';

import useProfile, { LOAD_IMAGE } from './useProfile';
import RowWithIcon from './RowWithIcon';
import { items } from './basicItems';
import style from './style';

import ErrorImg from 'assets/error.png';
import { BaseApiState } from 'types/api';

export default function Profile() {
  const {
    info: { location, bio },
    image,
    state,
  } = useProfile();
  const loading = useMemo(() => state === BaseApiState.LOAD || state === LOAD_IMAGE, [state]);
  return (
    <div style={style.container}>
      <WithSpinner loading={loading}>
        <div style={style.image}>{<img src={image || ErrorImg} alt="Me" style={style.image} />}</div>
      </WithSpinner>
      <Title style={style.name}>Tim Snow</Title>
      <div style={style.infoContainer}>
        <Table>
          <RowWithIcon text={location} icon="location" />
          <RowWithIcon text={bio} icon="work" />
          {items.map((item) => (
            <RowWithIcon key={item.key} {...item} />
          ))}
        </Table>
      </div>
    </div>
  );
}
