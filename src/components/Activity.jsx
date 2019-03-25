import React, { useEffect, useState } from 'react'

import ActivityTableHeader from './ActivityTableHeader'
import request from '../libs/request'
import Link from './Link'
import Error from './Error'

import { secondary, shadow, radius, textColour } from '../constants/styles'

const Activity = () => {
  const [activities, setActivities] = useState([])
  const [loaded, setLoaded] = useState(undefined)

  useEffect(() => {
    request({ endpoint: '/users/tim-snow/events' })
      .then(res => cleanEventNames(res))
      .then(clean => setActivities(clean))
      .then(() => setLoaded(true))
      .catch(() => setLoaded(false))
  }, [])

  const cleanEventNames = activities => {
    return activities.map(act => {
      switch (act.type) {
        case 'WatchEvent':
          act.type = 'Watching'
          break
        case 'PushEvent':
          act.type = 'Pushed to'
          break
        case 'CreateEvent':
          act.type = 'Created'
          break
        default:
          break
      }
      return act
    })
  }

  return (
    <div style={styles.container}>
      <h2>Recent Github activity</h2>
      <ActivityTableHeader />

      {loaded === false && <Error />}

      <table style={styles.fullWidth}>
        <tbody style={styles.table}>
          {loaded &&
            activities.map(activity => (
              <tr style={{ ...styles.row, ...styles.shadow }} key={activity.id}>
                <td style={styles.column}>
                  {activity.created_at && activity.created_at.substr(0, 10)}
                </td>
                <td style={styles.column}>{activity.type}</td>
                <td style={styles.column}>
                  <Link
                    text={activity.repo.name.split('/')[1]}
                    url={activity.repo.url}
                  />
                </td>
                <td style={styles.column}>
                  {activity.type === 'Pushed to' &&
                    activity.payload.commits.map(commit => (
                      <p key={commit.sha}>
                        <Link text={commit.message} url={commit.url} />
                      </p>
                    ))}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: radius,
    background: secondary,
    color: textColour,
    textAlign: 'center',
    margin: 10,
    height: 600,
    width: 900,
    padding: 15,
    boxShadow: shadow,
  },
  fullWidth: {
    width: '100%',
    display: 'flex',
  },
  table: {
    height: 490,
    overflowY: 'auto',
    width: '100%',
  },
  column: {
    flex: 1,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  shadow: {
    boxShadow: '0px 0px 9px 0px rgba(0,0,0,0.1)',
    margin: 5,
  },
}

export default Activity
