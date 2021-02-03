const { Patient } = require("../models");

const patientdata = [
  {
    Name: "test 1",
    Room: 1,

  },

  {
    Name: "test 2",
    Room: 2,
  },

  {
    Name: "test 3",
    Room: 3,
  },

  {
    Name: "test 4",
    Room: 4,
  },
];
const seedPatient = () => Nurse.bulkCreate(patientdata);

module.exports = seedPatient;

