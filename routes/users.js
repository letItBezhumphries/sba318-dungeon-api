const express = require('express');
const router = express.Router();
const { faker } = require('@faker-js/faker');
// need to require in any auth middleware

/* pre-db users data */
const users = require('../data/users');
const dungeons = require('../data/dungeons');
const characters = require('../data/characters');

// @route    GET /users
// @desc     get all users
// @access   Public
router.get('/', (req, res) => {
  res.status(200).render('users', {
    title: 'Users',
    page: 'Users page',
    linkA: 'Characters',
    linkB: 'Monsters',
    linkC: 'login',
    content: users,
    method: 'GET method',
  });
  // res.send('hi this is the get all users route');
});

// @route    GET /users/:id
// @desc     get user by id
// @access   Public
router.get('/:id', (req, res) => {
  const user = users.filter((user) => user.id === +req.params.id);
  // res.render({
  //   title: 'Users',
  //   page: 'Users page',
  //   linkA: 'Characters',
  //   linkB: 'Monsters',
  //   linkC: 'login',
  //   content: 'User By Id',
  //   method: 'GET characters for a User',
  // });
  if (user.length > 0) {
    res.status(200).json(user[0]);
  } else {
    throw new Error({
      message: 'No user with this id exists',
    });
  }
});

// @route    POST /users
// @desc     creates a new user
// @access   should be private
router.post('/', (req, res, next) => {
  // console.log('req.body:', req.body);
  const { username, avatar, email, password } = req.body;

  let newUser = {
    id: faker.string.uuid(),
    username: username,
    email: email,
    avatar: avatar,
    password: password,
  };

  users.push(newUser);

  res.status(201).redirect(`/users/:${newUser.id}`);
});

// Update route - update a user by id
// @route    PUT users/:id
// @desc     update a users username or password
// @access   Private
router.put('/:id', (req, res, next) => {
  const user = users.find((user, indx) => {
    if (user.id === +req.params.id) {
      for (const key in req.body) {
        users[indx][key] = req.body[key];
      }
      return true;
    }
  });
  if (user) res.status(203).json(user);
  else next();
});

// Delete route - delete a user by id
// @route    DELETE users/:id
// @desc     Delete user and characters and dungeons
// @access   Private
router.delete('/:id', (req, res, next) => {
  // need to remove dungeons with userId

  // need to remove characters with userId
  const user = users.find((user, indx) => {
    if (user.id === +req.params.id) {
      users.splice(indx, 1);
      // return true;
    }
  });
  if (user) res.status(204).json(user);
  else next();
});

module.exports = router;
