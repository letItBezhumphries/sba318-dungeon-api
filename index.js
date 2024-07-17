const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config();
const PORT = process.env.PORT;
const PUBLIC_DIR = path.join(__dirname, 'public');
const app = express();

// const connectDB = require('./db/index');
/* Pre database */
const monsters = require('./data/monsters');

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
app.use('/api/users', userRoutes);
app.use('/api/characters', characterRoutes);
app.use('/api/dungeons', dungeonRoutes);
app.use('/api/monsters', monsterRoutes);
// set up middleware

// serve static files
app.use('public', express.static(PUBLIC_DIR));

// serve up the home page
app.get('/', (req, res) => {
  res.render('index', {
    page_title: 'Welcome to the D&D Dungeon Builder',
    monstersView: true,
    monsters,
    authenticated: false,
  });
});

app.set('view engine', 'pug');

app.listen(PORT, () => {
  console.log(`you are listening on localhost on port ${PORT}`);
});
