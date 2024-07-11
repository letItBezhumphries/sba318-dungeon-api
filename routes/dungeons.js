const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('this is the get all dungeons for user route');
});

router.post('/new', (req, res) => {
  res.send('this is the create new dungeon post route');
});

router.put('/edit/:dunId', (req, res) => {
  res.send(`this is the edit dungeon with id: ${req.params.dunId} put route`);
});

router.delete('/remove/:dunId', (req, res) => {
  res.send(`this is the delete dungeon with an id: ${req.params.chrId} route`);
});

module.exports = router;
