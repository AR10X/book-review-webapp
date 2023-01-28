const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/public')));

// Put all API endpoints under '/api'
app.get('/api/reviews', (req, res) => {
  // Return some mock data
  res.json([{ id: 1, title: 'Book 1', author: 'Author 1' }]);
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/public/index.html'));
});

const port = 4000;
app.listen(port);

console.log(`App listening on port ${port}`);

module.exports = app;