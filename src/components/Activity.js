import React, { useEffect, useState } from 'react'

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
      <h2>Recent activity</h2>
      <table>
        <tbody>
          <tr key="titles">
            <td>
              <h5>Date</h5>
            </td>
            <td>
              <h5>Event</h5>
            </td>
            <td>
              <h5>Repository</h5>
            </td>
            <td>
              <h5>Commit message</h5>
            </td>
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
    maxWidth: 900,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  border: {
    borderColor: '#333',
    borderWidth: 1,
    borderLeftStyle: 'solid',
    borderTopStyle: 'solid',
  },
}

export default Activity
