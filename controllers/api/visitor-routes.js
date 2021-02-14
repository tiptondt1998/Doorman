const router = require('express').Router();
const { Visitor, Patient } = require('../../models');
//const { restore } = require('../../models/room');

router.put('/', async (req, res) => {
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

router.delete('/', (req, res) => {
  Visitor.destroy({
    where: {
      roomNumber: req.body.roomNumber
    }
  })
    .then(dbVisitorData => {
      if (!dbVisitorData) {
        res.status(404).json({ message: 'No visitor found' });
        return;
      }
      res.json(dbVisitorData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
