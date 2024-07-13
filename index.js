const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config();
const PORT = process.env.PORT;
const PUBLIC_DIR = path.join(__dirname, 'public');
const app = express();

// const connectDB = require('./db/index');

console.log('public dir:', PUBLIC_DIR);
// connectDB();

/** define Routes */
const userRoutes = require('./routes/users');
const characterRoutes = require('./routes/characters');
const dungeonRoutes = require('./routes/dungeons');
const monsterRoutes = require('./routes/monsters');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

/** Wiring in route handlers */
app.use('/users', userRoutes);
app.use('/characters', characterRoutes);
app.use('/dungeons', dungeonRoutes);
app.use('/monsters', monsterRoutes);
// set up middleware
// app.use(express.static(PUBLIC_DIR));

// app.use('static', express.static(PUBLIC_DIR));

// serve the index.js file with res.sendFile()
// serve up the home page
app.get('/', (req, res) => {
  res.render('index');
});

app.set('view engine', 'pug');

app.listen(PORT, () => {
  console.log(`you are listening on localhost on port ${PORT}`);
});
