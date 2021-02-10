const Patient = require('./patient');
const Visitor = require('./visitor')

Patient.hasOne(Visitor, {
    foreignKey: 'roomNumber'
});
Visitor.belongsTo(Patient);

module.exports = { Patient, Visitor };