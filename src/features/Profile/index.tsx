import React, { useMemo } from 'react';

import { main, textColour } from 'constants/styles';
import { WithSpinner } from 'components/Spinner';
import Table from 'components/Table';
import Title from 'components/Title';

import useProfile, { LOAD_IMAGE } from './useProfile';
import RowWithIcon from './RowWithIcon';
import { items } from './basicItems';

import ErrorImg from 'assets/error.png';
import { BaseApiState } from 'types/api';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: main,
    color: textColour,
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    paddingBottom: 12,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 150,
  },
  name: {
    fontSize: 54,
    fontWeight: 600,
    color: '#DEDEDE',
  },
} as { [key: string]: React.CSSProperties };

export default function Profile() {
  const {
    info: { location, bio },
    image,
    state,
  } = useProfile();
  const loading = useMemo(() => state === BaseApiState.LOAD || state === LOAD_IMAGE, [state]);
  return (
    <div style={styles.container}>
      <WithSpinner loading={loading}>
        <div style={styles.image}>{<img src={image || ErrorImg} alt="Me" style={styles.image} />}</div>
      </WithSpinner>
      <Title style={styles.name}>Tim Snow</Title>
      <div style={styles.infoContainer}>
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
