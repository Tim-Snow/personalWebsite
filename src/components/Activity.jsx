import React, { useEffect, useState } from 'react'

import TableTitle from './TableTitle'
import request from '../libs/request'
import CommitMessage from './CommitMessage'

import { secondary, shadow, radius } from '../constants/styles'

function Activity() {
  const [activities, setActivities] = useState([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    getGitActivity()
  }, [])

  const getGitActivity = () => {
    request('/users/tim-snow/events')
      .then(res => cleanEventNames(res))
      .then(clean => setActivities(clean))
      .then(() => setLoaded(true))
  }

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
      <table>
        <tbody>
          <tr key="titles">
            <TableTitle value="Date" />
            <TableTitle value="Event" />
            <TableTitle value="Repository" />
            <TableTitle value="Commit message" />
          </tr>
          {loaded &&
            activities.map(activity => (
              <tr key={activity.id}>
                <td style={styles.border}>
                  {activity.created_at && activity.created_at.substr(0, 10)}
                </td>
                <td style={styles.border}>{activity.type}</td>
                <td style={styles.border}>
                  <a href={activity.repo.url}>
                    {activity.repo.name.split('/')[1]}
                  </a>
                </td>
                <td style={styles.border}>
                  {activity.type === 'Pushed to' &&
                    activity.payload.commits.map(commit => (
                      <p key={commit.sha}>
                        <CommitMessage
                          message={commit.message}
                          url={commit.url}
                        />
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
    borderRadius: radius,
    background: secondary,
    color: '#333',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 10,
    overflowY: 'scroll',
    height: 600,
    width: 900,
    padding: 15,
    boxShadow: shadow,
  },
  border: {
    borderColor: '#333',
    borderWidth: 1,
    borderLeftStyle: 'solid',
    borderTopStyle: 'solid',
  },
}

export default Activity
