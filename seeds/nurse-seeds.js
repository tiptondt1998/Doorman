const { Nurse } = require("../models");
const nursedata = [
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
const seedNurse = () => Nurse.bulkCreate(nursedata);
module.exports = seedNurse;