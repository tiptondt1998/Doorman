const { Nurse } = require("../models");

const nursedata = [
  {
    Name: "test 1",
    Employee_ID: "1",
    Password: "test 1",
  },

  {
    Name: "test 2",
    Employee_ID: "2",
    Password: "test 2",
  },

  {
    Name: "test 3",
    Employee_ID: "3",
    Password: "test 3",
  },

  {
    Name: "test 4",
    Employee_ID: "4",
    Password: "test 4",
  },
];
const seedNurse = () => Nurse.bulkCreate(nursedata);

module.exports = seedNurse;
