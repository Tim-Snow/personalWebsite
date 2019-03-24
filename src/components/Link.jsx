import React, { useState, useEffect } from 'react'

const { REACT_APP_API_KEY } = process.env

function Link(props) {
  const [url, setUrl] = useState('')

  useEffect(() => fetchUrl(), [])

  const fetchUrl = () => {
    fetch(props.url, {
      method: 'get',
      headers: {
        Authorization: `token ${REACT_APP_API_KEY}`,
      },
    })
      .then(res => res.json())
      .then(json => setUrl(json.html_url))
      .catch(err => console.error('err' + err))
  }

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      {props.text}
    </a>
  )
}

export default Link
