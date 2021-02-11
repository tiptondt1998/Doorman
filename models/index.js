const Patient = require('./patient');
const Visitor = require('./visitor');
const Nurse = require('./nurse');
const Screener = require('./screener');

Patient.hasOne(Visitor, {
    foreignKey: 'roomNumber'
});
Visitor.belongsTo(Patient);

module.exports = { Patient, Visitor, Nurse, Screener };