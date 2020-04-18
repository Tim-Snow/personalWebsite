import React from 'react';

import ActivityTableHeader from './TableHeader';
import useActivities, { EVENT_NAME_MAP } from './useActivities';
import Link from './Link';

import Error from 'components/Error';
import Title from 'components/Title';
import Table from 'components/Table';
import { WithSpinner } from 'components/Spinner';
import { secondary, textColour, main } from 'constants/styles';
import { BaseApiState } from 'types/api';

const styles = {
  container: {
    background: secondary,
    color: textColour,
    textAlign: 'center',
    padding: 12,
    margin: 24,
    width: 800,
    minHeight: 820,
  },
  tableContainer: {
    maxHeight: 700,
    overflowY: 'auto',
    overflowX: 'hidden',
  },
  column: {
    flex: 1,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    borderColor: main,
    borderStyle: 'solid',
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRadius: 3,
    marginBottom: 12,
  },
  spinner: {
    position: 'relative',
  },
} as { [key: string]: React.CSSProperties };

export default function Activity() {
  const { activities, state } = useActivities();
  return (
    <div style={styles.container} id="activity">
      <Title>Recent Github activity</Title>
      <ActivityTableHeader />
      {state === BaseApiState.KO ? (
        <Error />
      ) : (
        <WithSpinner loading={state === BaseApiState.LOAD} style={styles.spinner}>
          <div style={styles.tableContainer}>
            <Table>
              {activities?.map((activity) => (
                <tr style={styles.row} key={activity.id}>
                  <td style={styles.column}>{activity.created_at}</td>
                  <td style={styles.column}>{activity.type}</td>
                  <td style={styles.column}>
                    <Link text={activity.repo.name.split('/')[1]} url={activity.repo.url} />
                  </td>
                  <td style={styles.column}>
                    {activity.type === EVENT_NAME_MAP.PushEvent &&
                      activity.payload?.commits.map((commit) => (
                        <div key={commit.sha}>
                          <Link text={commit.message} url={commit.url} />
                        </div>
                      ))}
                  </td>
                </tr>
              ))}
            </Table>
          </div>
        </WithSpinner>
      )}
    </div>
  );
}
