const express = require('express');
const router = express.Router();
const { faker } = require('@faker-js/faker');

/* pre-db dungeons data */
const dungeons = require('../data/dungeons');
const monsters = require('../data/monsters');

// @route    GET /dungeons
// @desc     get all dungeons
// @access   Public
router.get('/', (req, res) => {
  res.status(200).render('dungeons', {
    page_title: 'Dungeons Built',
    dungeons: dungeons,
    monsters: monsters,
  });
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
    res.status(200).render('dungeons', {
      page_title: `${dungeon.dungeon_name} details`,
      dungeon: dungeon,
      authenticated: true,
    });
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
    id: faker.string.uuid().split('-').join(''),
    userId: userId,
    size: size,
    dungeon_name: dungeon_name,
    monsters: monsters,
  };

  dungeons.push(newDungeon);

  // res.status(201).redirect(`/dungeons/:${newDungeon.id}`);
  res.status(201).render('dungeons', {
    page_title: `${newDungeon.dungeon_name} has been discovered!`,
    authenticated: true,
    dungeon: newDungeon,
  });
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

  if (dungeon) {
    res.status(203).render('dungeons', {
      page_title: `${dungeon.dungeon_name} has been updated!`,
      authenticated: true,
      dungeon: dungeon,
    });
  }
  // if (dungeon) res.status(203).render('dungeon', { dungeon });
  // else next();
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
  // if (dungeon) res.status(204).render('dungeon', { dungeon });
  // else next();
  if (dungeon) {
    res.status(204).render('dungeons', {
      page_title: `${dungeon.dungeon_name} has been deleted!`,
      authenticated: true,
      dungeon: dungeon,
    });
  }
});

module.exports = router;
