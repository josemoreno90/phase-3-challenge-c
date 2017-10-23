const express = require('express');
const app = express();

const bodyParser = require('body-parser')

app.use(bodyParser.json());

app.get('/api/shout/:word', (req, res) => {
  //Gets route paramters passed into ':word'
  const word = req.params.word.toUpperCase();
  res.send(word + "!!!");
})

app.post('/api/array/merge', (request, response) => {
  console.log(request.body.a + " " + request.body.b);
  let arrA = request.body.a;
  let arrB = request.body.b;
  let longestArray;
  if (Array.isArray(arrA) === false || Array.isArray(arrB) === false) {
    response.status(400).json({ "error": "Input data should be of type Array." })
  } else {
    let mergedArray = [];
    arrA.length > arrB.length ? longestArray = arrA : longestArray = arrB;
    let index = 0;
    do {
      mergedArray.push(arrA[index]);
      mergedArray.push(arrB[index]);
      index++;
    } while (index < longestArray.length);
    let finalArray = mergedArray.filter(index => index !== undefined);
    response.json({ "result": finalArray })
  }
})

app.listen(3000, () => console.log('We hear you'));
