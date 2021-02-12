const Patient = require('./patient');
const Visitor = require('./visitor');
const Nurse = require('./nurse');
const Screener = require('./screener');

Patient.hasOne(Visitor, {
    foreignKey: 'id'
});

Visitor.belongsTo(Patient, {
    foreignKey: 'room_number'
});

module.exports = { Patient, Visitor, Nurse, Screener };