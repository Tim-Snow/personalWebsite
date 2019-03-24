import React, { useEffect, useState } from 'react'

import TableTitle from './TableTitle'
import request from '../libs/request'

function Activity() {
  const [activity, setActivity] = useState([])

  useEffect(() => {
    getGitActivity()
  }, [])

  const getGitActivity = async () => {
    const response = await request('/api/users/tim-snow/events')

    // const cleaned = await cleanEventNames(response)
    await setActivity(cleanEventNames(response))
  }

  const cleanEventNames = activities => {
    return activities.map(act => {
      switch (act.type) {
        case 'WatchEvent':
          act.type = 'Watching'
          break
        case 'PushEvent':
          act.type = 'Pushed to'
          act.payload.commits.map(async commit => {
            const { html_url } = await fetch(commit.url, {
              method: 'get',
            })
              .then(res => res.json())
              .catch(err => console.error(err))
            commit.http_url = html_url
          })
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
          {activity &&
            activity.map(activity => (
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
                        <a href={commit.http_url}>{commit.message}</a>
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
