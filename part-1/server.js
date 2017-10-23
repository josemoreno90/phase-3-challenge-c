const express = require('express');
const app = express();

const bodyParser = require('body-parser')

app.use(bodyParser.json());

app.get('/api/shout/:word', (req, res) => {
  const word = req.params.word.toUpperCase();
  res.send(word + "!!!");
})

app.listen(3000, () => console.log('We hear you'));
