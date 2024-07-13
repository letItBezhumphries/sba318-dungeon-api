const mongoose = require('mongoose');

const CellSchema = new mongoose.Schema({
  colIndex: {
    type: String,
    required: true,
  },
  occupiedByObject: {
    type: Boolean,
  },
  occupiedByMonster: {
    type: Boolean,
  },
  occupiedByCharacter: {
    type: Boolean,
  },
  occupiedByTrap: {
    type: Boolean,
  },
  isWall: {
    type: Boolean,
    required: true,
  },
});

const RowSchema = new mongoose.Schema({
  index: {
    type: String,
    required: true,
  },
  cells: {
    type: [CellSchema],
  },
});

const DungeonSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  length: {
    type: Number,
    required: true,
  },
  environment: {
    type: String,
  },
  monstersList: {
    type: [Object],
    required: true,
  },
  board: {
    type: [RowSchema],
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Dungeon = mongoose.model('dungeon', DungeonSchema);
