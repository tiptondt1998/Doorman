const router = require('express').Router();
const { Visitor, Patient } = require('../../models');
const { restore } = require('../../models/room');

// const foo = await Foo.create({ name: 'the-foo' });
// const bar1 = await Bar.create({ name: 'some-bar' });
// const bar2 = await Bar.create({ name: 'another-bar' });
// console.log(await foo.getBar()); // null
// await foo.setBar(bar1);

router.patch('/', async (req, res) => {
  try {
    const patient = await Patient.findOne({
      where: { roomNumber: req.body.roomNumber },
    });

    const visitor = await Visitor.create({
      name: req.body.name,
      phoneNumber: req.body.phoneNumber,
      roomNumber: `${patient.roomNumber}`,
    });

    console.log('>>>> roomNumber: ', patient.roomNumber);

    await patient.setVisitor(visitor);
  } catch (err) {
    console.log('Visitor Create Route Error: ', err);
    res.status(500).json(err);
  }
});

// Patient.findOne({
//   where: { roomNumber: req.body.roomNumber },
// }).then((dbRoomNumber) => {
//   console.log('>>>> roomNumber: ', dbRoomNumber.roomNumber);
//   Visitor.create(
//     {
//       name: req.body.name,
//       phoneNumber: req.body.phoneNumber,
//       roomNumber: `${dbRoomNumber.roomNumber}`,
//     },
//     {
//       where: {
//       },
//     }
//   ).then((dbVisitorData) => {
//     console.log(dbVisitorData);
//   });
// });

// Visitor.create({
//     name: req.body.name,
//     phoneNumber: req.body.phoneNumber,
//     roomNumber: req.body.roomNumber
//   },
// //   {
// //     include: [
// //     {
// //       model: Patient,
// //       as: req.body.roomNumber
// //     }
// //   ]
// // }
// )
// .then(dbVisitorData => {
//   console.log(dbVisitorData);
//     res.json(dbVisitorData);
// })
// .catch(err => {
//     console.log('Visitor Create Route Error: ', err);
//     res.status(500).json(err);
// });

module.exports = router;
