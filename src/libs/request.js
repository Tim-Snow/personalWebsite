const { REACT_APP_API_KEY } = process.env;

const REACT_APP_API_URL = '';

// WHILE I WILL REMOVE THIS
// lib dir still valid, find use that isnt a hook

const request = (options) =>
  fetch(options.fullUrl || `${REACT_APP_API_URL}${options.endpoint}`, {
    method: 'get',
    headers: {
      Authorization: `token ${REACT_APP_API_KEY}`,
    },
  }).then((res) => res.json());

export const requestImage = (url) => fetch(url).then((response) => response.blob());

export default request;
