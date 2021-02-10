const Nurse = require('./nurse');
const Patient = require('./patient');
const Room = require('./room');
const Visitor = require('./visitor')
const Screener = require("./screener");

Visitor.belongsTo(Patient, {
    foreignKey: 'roomNumber'
});

module.exports = { Nurse, Patient, Room, Visitor, Screener };