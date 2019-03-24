const { REACT_APP_API_KEY, REACT_APP_API_URL } = process.env

const request = url =>
  fetch(`${REACT_APP_API_URL}${url}`, {
    method: 'get',
    headers: {
      Authorization: `token ${REACT_APP_API_KEY}`,
    },
  }).then(res => res.json())

export const requestImage = url => fetch(url).then(response => response.blob())

export default request
