const Nurse = require('./nurse');
const Patient = require('./patient');
const Room = require('./room');
const Visitor = require('./visitor')

Nurse.hasMany(Patient, {
    foreignKey: 'employee_id'
});

Nurse.hasMany(Room, {
    foreignKey: 'employee_id'
});

Patient.hasMany(Nurse, {
    foreignKey: 'patient_id'
});

Patient.hasMany(Visitor, {
    foreignKey: 'patient_id'
});

Patient.belongsTo(Room, {
    foreignKey: 'room_id'
});

Room.hasOne(Patient, {
    foreignKey: 'room_id'
});

Room.belongsTo(Patient, {
    foreignKey: 'patient_id'
})

Room.hasMany(Nurse, {
    foreignKey:'room_id'
});

Room.hasMany(Visitor, {
    foreignKey: 'room_id'
});

Visitor.belongsTo(Patient, {
    foreignKey: 'patient_id'
});

Visitor.belongsTo(Room, {
    foreignKey: 'room_id'
});

module.exports = { Nurse, Patient, Room, Visitor };