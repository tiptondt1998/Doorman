const { Patient } = require("../models");

const patientdata = [
  {
    Name: "test 1",
    Room: "test 1",
    
  },

  {
    Name: "test 2",
    Diagnosis: "test2",
  },

  {
    Name: "test 3",
    Diagnosis: "test 3",
  },

  {
    Name: "test 4",
    Diagnosis: "test 4",
  },
];
const seedPatient = () => Nurse.bulkCreate(patientdata);

module.exports = seedPatient;
