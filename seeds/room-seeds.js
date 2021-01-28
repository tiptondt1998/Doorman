const { Room } = require("../models");

const roomdata = [
  {
    Room: "1",
    Equipment: "test 1",
    Visitor: "test 1",
    Final_Visit: "test 1"
  },

  {
    Room: "2",
    Equipment: "test 2",
    Visitor: "test 2",
    Final_Visit: "test 2"
  },

  {
    Room: "3",
    Equipment: "test 3",
    Visitor: "test 3",
    Final_Visit: "test 3"
  },
  {
    Room: "4",
    Equipment: "test 4",
    Visitor: "test 4",
    Final_Visit: "test 4"
  },
];
const seedRoom = () => Room.bulkCreate(roomdata);

module.exports = seedRoom;
