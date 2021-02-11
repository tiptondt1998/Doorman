const Patient = require('./patient');
const Visitor = require('./visitor');
const Nurse = require('./nurse');
const Screener = require('./screener');

Visitor.hasOne(Patient);

Patient.belongsTo(Visitor, {
    foreignKey: 'roomNumber'
});

module.exports = { Patient, Visitor, Nurse, Screener };