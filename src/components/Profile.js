import React, { useEffect, useState } from 'react'

import EmailSvg from '../assets/outline-alternate_email-24px.svg'
import WorkSvg from '../assets/outline-business-24px.svg'
import PhoneSvg from '../assets/outline-call-24px.svg'
import LocationSvg from '../assets/outline-location_on-24px.svg'
import WebsiteSvg from '../assets/outline-screen_share-24px.svg'
import GithubSvg from '../assets/github.svg'

import Tooltip from '@material-ui/core/Tooltip'

function Profile() {
  const [info, setInfo] = useState({
    name: 'Tim Snow',
    bio: 'Developer',
    location: 'England',
    email: 'tim.snow1991@gmail.com',
    blog: 'http://www.tim-snow.co.uk',
  })
  const [phone, setPhone] = useState('07944 878 ???')

  useEffect(() => {
    fetchGitInfo()
  }, [])

  const fetchGitInfo = async () => {
    const { REACT_APP_API_KEY, REACT_APP_API_URL } = process.env

    const { name, blog, email, location, bio, avatar_url } = await fetch(
      `${REACT_APP_API_URL}/users/tim-snow`,
      {
        method: 'get',
        headers: {
          Authorization: `token ${REACT_APP_API_KEY}`,
        },
      },
    )
      .then(res => res.json())
      .catch(err => console.error(err))

    const image = URL.createObjectURL(
      await fetch(avatar_url)
        .then(response => response.blob())
        .catch(err => console.error(err)),
    )

    setInfo({
      name: name.replace(' ', '\n'),
      blog,
      email,
      location,
      bio,
      image,
    })
  }

  const revealPhoneNumber = () => setPhone('07944 878 537')

  return (
    <div style={styles.container}>
      <h1 style={styles.name}>{info.name}</h1>
      {info.image && <img src={info.image} alt="Me" style={styles.image} />}
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
                Find me on <a href="https://github.com/Tim-Snow">github</a>
              </td>
            </tr>
            <tr style={styles.row}>
              <td style={styles.col}>
                <img style={styles.icon} src={EmailSvg} alt="Email" />
              </td>
              <td>
                <a href={`mailto:${info.email}?subject=Hello world!`}>
                  <p>{info.email}</p>
                </a>
              </td>
            </tr>
            <tr style={styles.row}>
              <td style={styles.col}>
                <img style={styles.icon} src={WebsiteSvg} alt="Web" />
              </td>
              <td>
                <a href={info.blog}>{info.blog && info.blog.substr(7)}</a> -
                you're already here!
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
    backgroundColor: '#DFDFDF',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
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
