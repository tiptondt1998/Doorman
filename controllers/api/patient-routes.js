const router = require('express').Router();
const { Patient } = require('../../models');
const withAuth= require("../../utils/auth");

router.get('/', (req, res) => {
  console.log('======================');
  Patient.findAll({
    attributes: [
      'name',
      'roomNumber',
      'covidPositive',
      'finalVisit'
    ],
    include: [
      {
        model: Patient,
        attributes: ['Name', 'Room'],
      },
    ]
  })
    .then(dbPatientData => res.json(dbPatientData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Patient.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'name',
      'roomNumber',
      'covidPositive',
      'finalVisit'
    ],
    include: [
      {
        model: Patient ,
        attributes: ['Name', 'Room'],
      },
    ]
  })
    .then(dbPatientData => {
      if (!dbPatientData) {
        res.status(404).json({ message: 'No patient found' });
        return;
      }
      res.json(dbPatientData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', withAuth, (req, res) => {
  Patient.update(
    {
      title: req.body.title
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbPatientData => {
      if (!dbPatientData) {
        res.status(404).json({ message: 'No patient found' });
        return;
      }
      res.json(dbPatientData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  Patient.create({
      roomNumber: req.body.roomNumber,
      name: req.body.name,
      covidPositive: req.body.covidPositive,
      finalVisit: req.body.finalVisit
    }
  )
  .then(dbPatientData => {
      res.json(dbPatientData);
  })
  .catch(err => {
      console.log(err);
      res.status(500).json(err);
  });
});

router.delete('/', withAuth, (req, res) => {
  console.log('id', req.params.id);
  Patient.destroy({
    where: {
      roomNumber: req.body.roomNumber
    }
  })
    .then(dbPatientData => {
      if (!dbPatientData) {
        res.status(404).json({ message: 'No patient found' });
        return;
      }
      res.json(dbPatientData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;