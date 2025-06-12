const express = require('express');
const serverless = require('serverless-http');

const app = express();
app.use(express.json());

app.post('/sort', (req, res) => {
  const { data } = req.body;

  if (typeof data !== 'string') {
    return res.status(400).json({ error: '"data" must be a string.' });
  }

  const sortedChars = data.split('').sort();
  res.status(200).json({ word: sortedChars });
});

module.exports.handler = serverless(app);
