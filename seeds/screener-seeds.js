const { Screener } = require("../models");

const screenerdata = [
  {
    Name: "test 1",
    Password: "test 1",
  },

  {
    Name: "test 2",
    Password: "test 2",
  },

  {
    Name: "test 3",
    Password: "test 3",
  },

  {
    Name: "test 4",
    Password: "test 4",
  },
];
const seedScreener = () => Screener.bulkCreate(screenerdata);

module.exports = seedScreener;
