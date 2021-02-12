const { Nurse } = require("../models");
const nursedata = [
  {
    username: "nurse1",
    password: "password",
    id: 1,
  },
  {
    username: "nurse2",
    password: "password",
    id: 2,

  },
  {
    username: "nurse3",
    password: "password",
    id: 3,
  }
];
const seedNurse = () => Nurse.bulkCreate(nursedata, {individualHooks: true});

module.exports = seedNurse;