const { Patient } = require("../models");

const patientdata = [
  {
    Name: "test 1",
    Room: "test 1",

  },

  {
    Name: "test 2",
    Room: "test 2",
  },

  {
    Name: "test 3",
    Room: "test 3",
  },

  {
    Name: "test 4",
    Room: "test 4",
  },
];
const seedPatient = () => Patient.bulkCreate(patientdata);

module.exports = seedPatient;
