const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT;
const app = express();
const path = require('path');

// set up middleware
express.use(express.static('public'));

// serve the index.js file

app.listen(PORT, () => {
  console.log(`you are listening on localhost on port ${PORT}`);
});
