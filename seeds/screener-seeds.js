const { Screener } = require("../models");

const screenerdata = [
  {

    username: "Dylan",
    password: "test",
    id: 1,
  },

  {
    username: "Jessica",
    password: "test",
    id: 2,
  },

  {
    username: "Jamie",
    password: "test",
    id: 3,
  },

  {
    username: "Andrew",
    password: "test",
    id: 4,

  },
];
const seedScreener = () => Screener.bulkCreate(screenerdata);

module.exports = seedScreener;
