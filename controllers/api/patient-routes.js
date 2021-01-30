const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Patient } = require('../../models');


router.get('/', (req, res) => {
  console.log('======================');
  Patient.findAll({
    attributes: [
      'Name',
      'Room',
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
      'Name',
      'Room',
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

;

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

router.delete('/:id', withAuth, (req, res) => {
  console.log('id', req.params.id);
  Patient.destroy({
    where: {
      id: req.params.id
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
