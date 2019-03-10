const request = async url => {
  const { REACT_APP_API_KEY, REACT_APP_API_URL } = process.env
  const response = await fetch(`${REACT_APP_API_URL}${url}`, {
    method: 'get',
    headers: {
      Authorization: `token ${REACT_APP_API_KEY}`,
    },
  })
    .then(res => res.json())
    .catch(err => console.error(err))

  return response
}

export default request
