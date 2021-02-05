const { Patient } = require("../models");

const patientdata = [
  {
    name: "test 1",
    roomNumber: 1,
    patient_id: 1
  },

  {
    name: "test 2",
    roomNumber: 2,
    patient_id: 2
  },

  {
    name: "test 3",
    roomNumber: 3,
    patient_id: 3
  },

  {
    name: "test 4",
    roomNumber: 4,
    patient_id: 4
  },
];
const seedPatient = () => Patient.bulkCreate(patientdata);

module.exports = seedPatient;