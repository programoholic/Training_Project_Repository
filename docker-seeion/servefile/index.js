const express = require('express');
const path = require('path');
const app = express();

// Define the port to run on

app.use(express.static(path.resolve(__dirname, 'public')));

// Listen for requests
const server = app.listen(process.env.PORT || 4500, function() {
  const port = server.address().port;
  console.log('Magic happens on port ' + port);
});