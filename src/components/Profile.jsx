import React, { useEffect, useState } from 'react';

import EmailSvg from '../assets/email.svg';
import WorkSvg from '../assets/business.svg';
import LocationSvg from '../assets/location.svg';
import GithubSvg from '../assets/github.svg';

import request, { requestImage } from '../libs/request';

import Slide from '@material-ui/core/Slide';

import { main } from '../constants/styles';

const Profile = () => {
  const [info, setInfo] = useState({
    name: 'Tim Snow',
    bio: 'Developer',
    location: 'England',
    email: 'contact@timsnow.dev',
    blog: 'http://timsnow.dev',
  });
  const [loaded, setLoaded] = useState(undefined);

  useEffect(() => {
    request({ endpoint: '/users/tim-snow' })
      .then(async r => {
        const { avatar_url, ...inf } = r;
        const image = await URL.createObjectURL(await requestImage(avatar_url));
        return setInfo({
          ...inf,
          image,
        });
      })
      .then(() => setLoaded(true))
      .catch(err => {
        console.log(err);
        setLoaded(false);
      });
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.name}>{info.name}</h1>
      {loaded !== false && (
        <Slide in={loaded}>
          <div>
            {info.image && (
              <img src={info.image} alt="Me" style={styles.image} />
            )}
          </div>
        </Slide>
      )}
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
                  style={{ color: 'white' }}
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
          </tbody>
        </table>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: 5,
    display: 'flex',
    backgroundColor: main,
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    overflow: 'hidden',
    color: '#DDD',
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
  icon: { width: 24 },
};

export default Profile;
