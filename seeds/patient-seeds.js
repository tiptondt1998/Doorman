const { Patient } = require("../models");

const patientdata = [
  {
    name: "test 1",
    roomNumber: 1,
    finalVisit: "test",
    covidPositive: "test"
  },

  {
    name: "test 2",
    roomNumber: 2,
    finalVisit: "test",
    covidPositive: "test"
  },

  {
    name: "test 3",
    roomNumber: 3,
    finalVisit: "test",
    covidPositive: "test"
  },

  {
    name: "test 4",
    roomNumber: 4,
    finalVisit: "test",
    covidPositive: "test"
  },
];
const seedPatient = () => Patient.bulkCreate(patientdata);

module.exports = seedPatient;