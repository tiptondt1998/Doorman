const { Patient } = require("../models");
const patientdata = [
  {
    roomNumber: '1',
    name: "test 1",
    finalVisit: "test",
    covidPositive: "test"
  },

  {
    roomNumber: '2',
    name: "test 2",
    finalVisit: "test",
    covidPositive: "test"
  },

  {
    roomNumber: '3',
    name: "test 3",
    finalVisit: "test",
    covidPositive: "test"
  },

  {
    roomNumber: '4',
    name: "test 4",
    finalVisit: "test",
    covidPositive: "test"
  },
];
const seedPatient = () => Patient.bulkCreate(patientdata);
module.exports = seedPatient;