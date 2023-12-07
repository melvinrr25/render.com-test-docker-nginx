const path = require('path');
const express = require('express');

// Constants
const PORT = process.env.PORT
// App
const app = express();

// Serve the index.html file for the root path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Define the directory for other static files (like CSS, JS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`Running on port: ${PORT}`);
});
