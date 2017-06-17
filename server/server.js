const express = require('express');
const config = require('config');
const app = express();

app.get('/', (req, res) => {
  res.json(config.get('message'));
});

const server = app.listen(8080, () => {
  const address = server.address();
  console.log('App listening at http://%s:%s', address.address, address.port);
});
