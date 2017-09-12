const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found.',
    name: 'Todo App v1.0'
  });
});

app.get('/users', (req, res) => {
  res.send([
    {
      name: 'Hubert Hsiung',
      age: 23
    },
    {
      name: 'Tzuyu Chou',
      age: 18
    }
  ]);
});

app.listen(3000);

exports.app = app;