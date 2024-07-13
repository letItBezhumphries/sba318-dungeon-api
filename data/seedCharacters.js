const fs = require('fs');
const { faker } = require('@faker-js/faker');
const users = require('./users');

const characterClasses = [
  { index: 'barbarian', name: 'Barbarian', url: '/api/classes/barbarian' },
  { index: 'bard', name: 'Bard', url: '/api/classes/bard' },
  { index: 'cleric', name: 'Cleric', url: '/api/classes/cleric' },
  { index: 'druid', name: 'Druid', url: '/api/classes/druid' },
  { index: 'fighter', name: 'Fighter', url: '/api/classes/fighter' },
  { index: 'monk', name: 'Monk', url: '/api/classes/monk' },
  { index: 'paladin', name: 'Paladin', url: '/api/classes/paladin' },
  { index: 'ranger', name: 'Ranger', url: '/api/classes/ranger' },
  { index: 'rogue', name: 'Rogue', url: '/api/classes/rogue' },
  { index: 'sorcerer', name: 'Sorcerer', url: '/api/classes/sorcerer' },
  { index: 'warlock', name: 'Warlock', url: '/api/classes/warlock' },
  { index: 'wizard', name: 'Wizard', url: '/api/classes/wizard' },
];

const characterRaces = [
  { index: 'dragonborn', name: 'Dragonborn', url: '/api/races/dragonborn' },
  { index: 'dwarf', name: 'Dwarf', url: '/api/races/dwarf' },
  { index: 'elf', name: 'Elf', url: '/api/races/elf' },
  { index: 'gnome', name: 'Gnome', url: '/api/races/gnome' },
  { index: 'half-elf', name: 'Half-Elf', url: '/api/races/half-elf' },
  { index: 'half-orc', name: 'Half-Orc', url: '/api/races/half-orc' },
  { index: 'halfling', name: 'Halfling', url: '/api/races/halfling' },
  { index: 'human', name: 'Human', url: '/api/races/human' },
  { index: 'tiefling', name: 'Tiefling', url: '/api/races/tiefling' },
];

const characterAlignments = [
  {
    index: 'chaotic-evil',
    name: 'Chaotic Evil',
    url: '/api/alignments/chaotic-evil',
  },
  {
    index: 'chaotic-good',
    name: 'Chaotic Good',
    url: '/api/alignments/chaotic-good',
  },
  {
    index: 'chaotic-neutral',
    name: 'Chaotic Neutral',
    url: '/api/alignments/chaotic-neutral',
  },
  {
    index: 'lawful-evil',
    name: 'Lawful Evil',
    url: '/api/alignments/lawful-evil',
  },
  {
    index: 'lawful-good',
    name: 'Lawful Good',
    url: '/api/alignments/lawful-good',
  },
  {
    index: 'lawful-neutral',
    name: 'Lawful Neutral',
    url: '/api/alignments/lawful-neutral',
  },
  { index: 'neutral', name: 'Neutral', url: '/api/alignments/neutral' },
  {
    index: 'neutral-evil',
    name: 'Neutral Evil',
    url: '/api/alignments/neutral-evil',
  },
  {
    index: 'neutral-good',
    name: 'Neutral Good',
    url: '/api/alignments/neutral-good',
  },
];

// modified users array to return shape needed for characters which at moment will use the user avatar for the img
const createMockCharacters = function (users) {
  let characters = [];

  // iterate over the users array
  let userIds = users.map((user) => {
    return {
      userId: user.id,
    };
  });

  userIds.forEach((user, index) => {
    let charactersCreatedTotal = faker.number.int({ min: 1, max: 3 });

    while (charactersCreatedTotal > 0) {
      characters.push({
        id: faker.string.uuid(),
        img: faker.image.urlLoremFlickr({ category: characterClasses[index] }),
        userId: user.userId,
        name: faker.person.firstName() + ' ' + faker.person.lastName(),
        gender: index % 2 !== 0 ? faker.person.sex() : faker.person.gender(),
        class: characterClasses[index],
        age: faker.number.int({ min: 15, max: 160 }),
        hit_points: faker.number.int({ min: 12, max: 34 }),
      });
      charactersCreatedTotal--;
    }
  });

  return characters;
};

const characters = createMockCharacters(users);

fs.writeFileSync(
  './data/characters.js',
  'const characters = ' +
    JSON.stringify(characters) +
    '\n\nmodule.exports = characters;',
  (err) => {
    if (err) {
      console.error('Error occured');
    }
  }
);
