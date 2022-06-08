'use strict';

const express = require('express');

// Constants
const PORT = 3000;
const HOST = 'localhost';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/health_check', (req, res) => {
  res.send('200 OK');
});

app.listen(PORT, HOST);
