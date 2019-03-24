import React, { useEffect, useState } from 'react'

import EmailSvg from '../assets/email.svg'
import WorkSvg from '../assets/business.svg'
import PhoneSvg from '../assets/call.svg'
import LocationSvg from '../assets/location.svg'
import GithubSvg from '../assets/github.svg'

import request, { requestImage } from '../libs/request'

import Tooltip from '@material-ui/core/Tooltip'
import Slide from '@material-ui/core/Slide'

import { main, shadow } from '../constants/styles'

function Profile() {
  const [info, setInfo] = useState({
    name: 'Tim Snow',
    bio: 'Developer',
    location: 'England',
    email: 'contact@timsnow.dev',
    blog: 'http://timsnow.dev',
  })
  const [phone, setPhone] = useState('07944 878 ???')
  const [fetched, setFetched] = useState(false)

  useEffect(() => {
    fetchGitInfo()
  }, [])

  const fetchGitInfo = async () => {
    const { name, blog, email, location, bio, avatar_url } = await request(
      '/users/tim-snow',
    )

    const image = await requestImage(avatar_url)

    setInfo({
      name,
      blog,
      email,
      location,
      bio,
      image,
    })
    setFetched(true)
  }

  const revealPhoneNumber = () => setPhone('07944 878 537')

  return (
    <div style={styles.container}>
      <h1 style={styles.name}>{info.name}</h1>
      <Slide in={fetched}>
        <div>
          {info.image && <img src={info.image} alt="Me" style={styles.image} />}
        </div>
      </Slide>
      <div style={styles.infoContainer}>
        <table>
          <tbody>
            <tr style={styles.row}>
              <td style={styles.col}>
                <img style={styles.icon} src={LocationSvg} alt="Location" />
              </td>
              <td>
                <p>Currently located in {info.location}</p>
              </td>
            </tr>
            <tr style={styles.row}>
              <td style={styles.col}>
                <img style={styles.icon} src={WorkSvg} alt="Work" />
              </td>
              <td>
                <p>{info.bio}</p>
              </td>
            </tr>
            <tr style={styles.row}>
              <td style={styles.col}>
                <img style={styles.icon} src={GithubSvg} alt="Github" />
              </td>
              <td>
                Find me on{' '}
                <a
                  href="https://github.com/Tim-Snow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github
                </a>
              </td>
            </tr>
            <tr style={styles.row}>
              <td style={styles.col}>
                <img style={styles.icon} src={EmailSvg} alt="Email" />
              </td>
              <td>
                <a
                  href={`mailto:${info.email}?subject=Hello world!`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>{info.email}</p>
                </a>
              </td>
            </tr>
            <tr style={styles.row}>
              <td style={styles.col}>
                <img style={styles.icon} src={PhoneSvg} alt="Phone" />
              </td>
              <td style={styles.interactive} onClick={revealPhoneNumber}>
                <Tooltip title="Shhh :)" placement="top-start" enterDelay={10}>
                  <p>{phone}</p>
                </Tooltip>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

const styles = {
  container: {
    padding: 5,
    display: 'flex',
    backgroundColor: main,
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    boxShadow: shadow,
  },
  infoContainer: {
    padding: 5,
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 15,
  },
  name: {
    fontSize: 54,
    fontWeight: 600,
    padding: 10,
  },
  row: {
    height: 50,
  },
  col: {
    textAlign: 'center',
    width: 50,
  },
  interactive: {
    cursor: 'pointer',
  },
  icon: { width: 24 },
}

export default Profile
