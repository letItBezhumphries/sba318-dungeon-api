const express = require('express');
const router = express.Router();
const { faker } = require('@faker-js/faker');

/* pre-db characters data */
const characters = require('../data/characters');

// @route    GET /characters
// @desc     get all characters
// @access   Public
router.get('/', (req, res) => {
  res.status(200).render('characters');
});

// @route    GET /characters/:id
// @desc     get character by id
// @access   Public
router.get('/:chrId', (req, res, next) => {
  const character = characters.find((ch) => {
    if (ch.id === +req.params.chrId) {
      return true;
    }
  });

  if (character) {
    res.status(200).json(character);
  } else {
    next();
  }
});

// @route    POST /characters
// @desc     creates a new character
// @access   private
router.post('/', (req, res, next) => {
  // console.log('req.body:', req.body);
  const { img, userId, name, gender, class_type, age, hit_points } = req.body;

  let newCharacter = {
    id: faker.string.uuid(),
    img: img,
    userId: userId,
    name: name,
    gender: gender,
    class_type: class_type,
    age: age,
    hit_points: hit_points,
  };

  characters.push(newCharacter);

  res.status(201).redirect(`/characters/:${newCharacter.id}`);
});

// Update route - update a character by id
// @route    PUT characters/:id
// @desc     update a character
// @access   Private
router.put('/:chrId', (req, res, next) => {
  const character = characters.find((chr, indx) => {
    if (chr.id === +req.params.chrId) {
      for (const key in req.body) {
        characters[indx][key] = req.body[key];
      }
      return true;
    }
  });
  if (character) res.status(203).json(character);
  else next();
});

// @route    DELETE characters/:chrId
// @desc     Delete character by id
// @access   Private
router.delete('/:chrId', (req, res, next) => {
  const character = characters.find((chr, indx) => {
    if (chr.id === +req.params.chrId) {
      characters.splice(indx, 1);
      return true;
    }
  });
  if (character) res.status(204).json(character);
  else next();
});

module.exports = router;
