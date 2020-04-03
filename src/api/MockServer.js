const express = require('express')
const data = require('./api-response.json');
const app = express()
const port = 3001

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.get('/topfive', (req, res) => res.json(data));

app.listen(port, () => console.log(`Mock server listening at http://localhost:${port}`));