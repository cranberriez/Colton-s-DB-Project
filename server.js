// const DataBase = require('./db')
const path = require('path');

const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
// app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'pubic', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});