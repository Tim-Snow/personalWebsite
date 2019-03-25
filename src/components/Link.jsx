import React, { useState, useEffect } from 'react'
import request from '../libs/request'

const Link = props => {
  const [url, setUrl] = useState('')

  useEffect(() => {
    request({ fullUrl: props.url })
      .then(json => setUrl(json.html_url))
      .catch(err => {
        setUrl('nooo')
        console.error('err' + err)
      })
  }, [])

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      {props.text}
    </a>
  )
}

export default Link
