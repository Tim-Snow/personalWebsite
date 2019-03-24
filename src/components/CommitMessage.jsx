import React, { useState, useEffect } from 'react'

const { REACT_APP_API_KEY } = process.env

function CommitMessage(props) {
  const [commitUrl, setUrl] = useState('')

  useEffect(() => fetchUrl(), [])

  const fetchUrl = () => {
    console.log(`calling: ${props.url}`)
    fetch(props.url, {
      method: 'get',
      headers: {
        Authorization: `token ${REACT_APP_API_KEY}`,
      },
    })
      .then(res => res.json())
      .then(res => setUrl(res.html_url))
      .catch(err => console.error('err' + err))
  }

  return <a href={commitUrl}>{props.message}</a>
}

export default CommitMessage
