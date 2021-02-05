const { Screener } = require("../models");

const screenerdata = [
  {
    username: "test 1",
    password: "test 1",
  },

  {
    username: "test 2",
    password: "test 2",
  },

  {
    username: "test 3",
    password: "test 3",
  },

  {
    username: "test 4",
    password: "test 4",
  },
];
const seedScreener = () => Screener.bulkCreate(screenerdata);

module.exports = seedScreener;
