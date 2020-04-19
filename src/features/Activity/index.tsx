import React from 'react';

import ActivityTableHeader from './TableHeader';
import useActivities from './useActivities';
import Link from './Link';
import style from './style';

import Error from 'components/Error';
import Title from 'components/Title';
import Table from 'components/Table';
import { WithSpinner } from 'components/Spinner';

import { BaseApiState } from 'types/api';

export default function Activity() {
  const { activities, state } = useActivities();
  return (
    <div style={style.container} id="activity">
      <Title>Recent Github activity</Title>
      <ActivityTableHeader />
      {state === BaseApiState.KO ? (
        <Error />
      ) : (
        <WithSpinner loading={state === BaseApiState.LOAD} style={style.spinner}>
          <div style={style.tableContainer}>
            <Table>
              {activities?.map((activity) => (
                <tr style={style.row} key={activity.id}>
                  <td style={style.column}>{activity.prettyCreated}</td>
                  <td style={style.column}>{activity.prettyType}</td>
                  <td style={style.column}>
                    <Link text={activity.repo.name.split('/')[1]} url={activity.repo.url} />
                  </td>
                  <td style={style.column}>
                    {activity.payload?.commits?.map((commit) => (
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
