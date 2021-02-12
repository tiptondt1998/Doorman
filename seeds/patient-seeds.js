const { Patient } = require("../models");
const patientdata = [
  {
    roomNumber: '100',
    name: "Jane Doe",
    finalVisit: "N",
    covidPositive: "N"
  },

  {
    roomNumber: '222',
    name: "John Smith",
    finalVisit: "N",
    covidPositive: "Y"
  },

  {
    roomNumber: '322',
    name: "Napoleon Bonaparte",
    finalVisit: "N",
    covidPositive: "Y"
  },

  {
    roomNumber: '455',
    name: "Commodus",
    finalVisit: "N",
    covidPositive: "N"
  },
];
const seedPatient = () => Patient.bulkCreate(patientdata);
module.exports = seedPatient;