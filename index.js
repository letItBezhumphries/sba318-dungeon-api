const express = require('express');
const path = require('path');
require('dotenv').config();
const PORT = process.env.PORT;
const PUBLIC_DIR = path.join(__dirname, 'public');
const app = express();
const connectDB = require('./db/index');

console.log('public dir:', PUBLIC_DIR);
connectDB();

/** define Routes */
const userRoutes = require('./routes/users');
const characterRoutes = require('./routes/characters');
const dungeonRoutes = require('./routes/dungeons');

/** Wiring in route handlers */
app.use('/users', userRoutes);
app.use('/characters', characterRoutes);
app.use('/dungeons', dungeonRoutes);

// set up middleware
// app.use(express.static(PUBLIC_DIR));

// app.use('static', express.static(PUBLIC_DIR));

// serve the index.js file with res.sendFile()
// serve up the home page
app.get('/', (req, res) => {
  // res.render('index', {
  //   title: 'HOME PAGE',
  //   page: 'This is the HOME PAGE!',
  //   linkA: 'Characters',
  //   linkB: 'Monsters',
  //   linkC: 'Login',
  // });
  res.send('This is the HOME LANDING PAGE!');
});

app.set('view engine', 'pug');

app.listen(PORT, () => {
  console.log(`you are listening on localhost on port ${PORT}`);
});
