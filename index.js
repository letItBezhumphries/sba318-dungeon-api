const express = require('express');
const path = require('path');
require('dotenv').config();
const PORT = process.env.PORT;

const app = express();

// set up middleware
express.use(express.static('public'));

// serve the index.js file

app.listen(PORT, () => {
  console.log(`you are listening on localhost on port ${PORT}`);
});
