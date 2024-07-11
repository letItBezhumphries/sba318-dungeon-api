const express = require('express');
const path = require('path');
require('dotenv').config();
const PORT = process.env.PORT;
const PUBLIC_DIR = path.join(__dirname, 'public');
const app = express();

/** define Routes */
const userRoutes = require('./routes/users');
const characterRoutes = require('./routes/characters');
const dungeonRoutes = require('./routes/dungeons');

/** Wiring in route handlers */
app.use('/users', userRoutes);
app.use('/characters', characterRoutes);
app.use('/dungeons', dungeonRoutes);

// set up middleware
express.use(express.static(PUBLIC_DIR));

// app.use('static', express.static(PUBLIC_DIR));

// serve the index.js file with res.sendFile()

app.set('view engine', 'pug');

app.listen(PORT, () => {
  console.log(`you are listening on localhost on port ${PORT}`);
});
