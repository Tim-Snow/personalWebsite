import { user, repo, events } from './mockResponses';
const express = require('express');
const app = express();
app.set('port', process.env.PORT || 3001);

app.get('/users/tim-snow', (req, res) => {
  console.log('user get request');

  res.json(user);
});

app.get('/users/tim-snow/repos', (req, res) => {
  console.log('repo get request');
  res.json(repo);
});

app.get('/users/tim-snow/events', (req, res) => {
  console.log('event get request');
  res.json(events);
});

app.use(express.static(__dirname + '/public'));

app.listen(app.get('port'), () => console.log(`Listening on port ${app.get('port')}!`));
