const utils = require('./utils');

const express = require('express');
const config = require('config');
const app = express();


app.get('/', (req, res) => {
  res.json(config.get('message'));
});

app.get('/hello', (req, res) => {
  res.send('this is cool!');
});

const server = app.listen(8080, () => {
  const address = server.address();
  console.log('App listening at http://localhost:8080');
});
