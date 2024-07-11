const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('this is the get all characters for user route');
});

router.post('/new', (req, res) => {
  res.send('this is the create new character post route');
});

router.put('/edit/:chrId', (req, res) => {
  res.send(`this is the edit character of ${req.params.chrId} put route`);
});

router.delete('/remove/:chrId', (req, res) => {
  res.send(`this is the delete character of ${req.params.chrId}`);
});

module.exports = router;
