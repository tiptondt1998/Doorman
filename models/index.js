const Nurse = require('./nurse');
const Patient = require('./patient');
const Room = require('./room');
const Visitor = require('./visitor')

// Nurse.hasMany(Patient, {
//     foreignKey: 'employee_id'
// });

// Nurse.hasMany(Room, {
//     foreignKey: 'employee_id'
// });

<<<<<<< HEAD
// Patient.hasMany(Nurse, {
//     foreignKey: 'patient_id'
// });

Patient.hasOne(Visitor, {
    foreignKey: 'patient_id'
});
=======
// Patient.hasOne(Nurse, {
//     foreignKey: 'patient_id'
// });

// Patient.hasOne(Visitor, {
//     foreignKey: 'patient_id'
// });
>>>>>>> 624d982e58e1fc9d8e1b3c7a2c5332d7466ca85f

// Patient.belongsTo(Room, {
//     foreignKey: 'room_id'
// });

// // Room.hasOne(Patient, {
// //     foreignKey: 'room_id'
// // });

<<<<<<< HEAD
// Room.belongsTo(Patient, {
//     foreignKey: 'patient_id'
// })

// Room.hasMany(Nurse, {
//     foreignKey:'room_id'
// });

Room.hasOne(Visitor, {
    foreignKey: 'room_id'
});
=======
// Room.hasOne(Patient, {
//     foreignKey: 'patient_id'
// })

// Room.hasOne(Nurse, {
//     foreignKey:'room_id'
// });

// Room.hasOne(Visitor, {
//     foreignKey: 'room_id'
// });
>>>>>>> 624d982e58e1fc9d8e1b3c7a2c5332d7466ca85f

// Visitor.belongsTo(Patient, {
//     foreignKey: 'patient_id'
// });

<<<<<<< HEAD
/* Visitor.belongsTo(Room, {
    foreignKey: 'room_id'
}); */
=======
// Visitor.belongsTo(Room, {
//     foreignKey: 'room_id'
// });
>>>>>>> 624d982e58e1fc9d8e1b3c7a2c5332d7466ca85f

module.exports = { Nurse, Patient, Room, Visitor };