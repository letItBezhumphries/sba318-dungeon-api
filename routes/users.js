const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  // res.render({
  //   title: 'Users',
  //   page: 'Users page',
  //   linkA: 'Characters',
  //   linkB: 'Monsters',
  //   linkC: 'login',
  //   content: 'Users Dungeons',
  //   method: 'GET method',
  // });
  res.send('hi this is the get all users route');
});

router.get('/:id', (req, res) => {
  // res.render({
  //   title: 'Users',
  //   page: 'Users page',
  //   linkA: 'Characters',
  //   linkB: 'Monsters',
  //   linkC: 'login',
  //   content: 'User By Id',
  //   method: 'GET characters for a User',
  // });
  res.send(`hi this is the get user by id: ${id} route`);
});

module.exports = router;
