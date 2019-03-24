const { REACT_APP_API_KEY, REACT_APP_API_URL } = process.env

const request = async url => {
  const response = await fetch(`${REACT_APP_API_URL}${url}`, {
    method: 'get',
    headers: {
      Authorization: `token ${REACT_APP_API_KEY}`,
    },
  }).then(res => res.json())

  return response
}

export const requestImage = async url => {
  return URL.createObjectURL(await fetch(url).then(response => response.blob()))
}

export default request
