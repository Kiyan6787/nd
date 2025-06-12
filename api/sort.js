// api/sort.js
const express = require('express');
const serverless = require('serverless-http');

const app = express();
app.use(express.json());

app.post('/', (req, res) => {
  const { data } = req.body;

  if (typeof data !== 'string') {
    return res.status(400).json({ error: '"data" must be a string' });
  }

  const sorted = data.split('').sort();
  res.json({ word: sorted });
});

module.exports = app;
module.exports.handler = serverless(app); // THIS is required by Vercel
