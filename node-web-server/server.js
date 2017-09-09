const express = require('express');

const app = express();

app.get('/', (req, res) => {
  //res.send('<h1>Hello Express</h1>');
  res.send({
    name: 'Hubert',
    likes: [
      'Gaming',
      'Basketball'
    ]
  })
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unable to fulfill request'
  });
})

app.listen(3000);