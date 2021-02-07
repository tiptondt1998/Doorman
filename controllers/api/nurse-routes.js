const router = require('express').Router();
const { Nurse } = require('../../models');
const withAuth= require("../../utils/auth");

router.get('/', (req, res) => {
  console.log('======================');
  Nurse.findAll({
    attributes: [
      'name',
      'password',
    ],
    include: [
      {
        model: Nurse,
        attributes: ['Name', 'Password'],
      },
    ]
  })
    .then(dbNurseData => res.json(dbNurseData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Nurse.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'Name',
      'Password',
    ],
    include: [
      {
        model: Nurse ,
        attributes: ['Name', 'Password'],
      },
    ]
  })
    .then(dbNurseData => {
      if (!dbNurseData) {
        res.status(404).json({ message: 'No nurse found' });
        return;
      }
      res.json(dbNurseData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

;

router.put('/:id', withAuth, (req, res) => {
  Nurse.update(
    {
      title: req.body.title
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbNurseData => {
      if (!dbNurseData) {
        res.status(404).json({ message: 'No nurse found' });
        return;
      }
      res.json(dbNurseData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', withAuth, (req, res) => {
  console.log('id', req.params.id);
  Nurse.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbNurseData => {
      if (!dbNurseData) {
        res.status(404).json({ message: 'No nurse found' });
        return;
      }
      res.json(dbNurseData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
