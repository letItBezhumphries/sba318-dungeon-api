const express = require('express');
const router = express.Router();
const { faker } = require('@faker-js/faker');

/* pre-db dungeons data */
const dungeons = require('../data/dungeons');

// @route    GET /dungeons
// @desc     get all dungeons
// @access   Public
router.get('/', (req, res) => {
  res.status(200).render('dungeons');
});

// @route    GET /dungeons/:id
// @desc     get dungeon by id
// @access   Public
router.get('/:dgId', (req, res, next) => {
  const dungeon = dungeons.find((dg) => {
    if (dg.id === +req.params.dgId) {
      return true;
    }
  });

  if (dungeon) {
    res.status(200).json(dungeon);
  } else {
    next();
  }
});

// @route    POST /dungeons
// @desc     creates a new dungeon
// @access   private
router.post('/', (req, res, next) => {
  // console.log('req.body:', req.body);

  const { userId, size, dungeon_name, monsters } = req.body;

  let newDungeon = {
    id: faker.string.uuid(),
    userId: userId,
    size: size,
    dungeon_name: dungeon_name,
    monsters: monsters,
  };

  dungeons.push(newDungeon);

  res.status(201).redirect(`/dungeons/:${newDungeon.id}`);
});

// Update route - update a dungeon by id
// @route    PUT dungeons/:id
// @desc     update a dungeon size or name
// @access   Private
router.put('/:dgId', (req, res, next) => {
  const dungeon = dungeons.find((dg, indx) => {
    if (dg.id === +req.params.dgId) {
      for (const key in req.body) {
        dungeons[indx][key] = req.body[key];
      }
      return true;
    }
  });
  if (dungeon) res.status(203).json(dungeon);
  else next();
});

// @route    DELETE dungeons/:dgId
// @desc     Delete dungeon by id
// @access   Private
router.delete('/:dgId', (req, res, next) => {
  const dungeon = dungeons.find((dg, indx) => {
    if (dg.id === +req.params.dgId) {
      dungeons.splice(indx, 1);
      return true;
    }
  });
  if (dungeon) res.status(204).json(dungeon);
  else next();
});

module.exports = router;
