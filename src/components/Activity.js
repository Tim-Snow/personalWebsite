import React, { useEffect, useState } from 'react'

import TableTitle from './TableTitle'

function Activity() {
  const [activity, setActivity] = useState([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (!loaded) {
      getGitActivity()
    }
  })

  const getGitActivity = async () => {
    const { REACT_APP_API_KEY, REACT_APP_API_URL } = process.env
    const activity = await fetch(`${REACT_APP_API_URL}/users/tim-snow/events`, {
      method: 'get',
      headers: {
        Authorization: `token ${REACT_APP_API_KEY}`,
      },
    })
      .then(res => res.json())
      .catch(err => console.error(err))

    await setActivity(cleanEventNames(activity))
    await setLoaded(true)
  }

  const cleanEventNames = activity => {
    return activity.map(act => {
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
            activity &&
            activity.map(activity => (
              <tr key={activity.id}>
                <td style={styles.border}>
                  {activity.created_at.substr(0, 10)}
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
                      <p key={commit.sha}>{commit.message}</p>
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
    background: '#DFDFDF',
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
  },
  border: {
    borderColor: '#333',
    borderWidth: 1,
    borderLeftStyle: 'solid',
    borderTopStyle: 'solid',
  },
}

export default Activity
