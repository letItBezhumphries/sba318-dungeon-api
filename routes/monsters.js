const express = require('express');
const router = express.Router();

/* pre-db monsters data */
const monsters = require('../data/monsters');

// @route    GET /monsters
// @desc     get all monsters
// @access   Public
router.get('/', (req, res) => {
  res.status(200).render('monsters', {
    monsters: monsters,
  });
});

module.exports = router;
