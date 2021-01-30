const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Screener } = require('../../models');


router.get('/', (req, res) => {
  console.log('======================');
  Screener.findAll({
    attributes: [
      'Name',
      'Password',
    ],
    include: [
      {
        model: Screener,
        attributes: ['Name', 'Password'],
      },
    ]
  })
    .then(dbScreenerData => res.json(dbScreenerData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Screener.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'Name',
      'Password',
    ],
    include: [
      {
        model: Screener ,
        attributes: ['Name', 'Password'],
      },
    ]
  })
    .then(dbScreenerData => {
      if (!dbScreenerData) {
        res.status(404).json({ message: 'No screener found' });
        return;
      }
      res.json(dbScreenerData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

;

router.put('/:id', withAuth, (req, res) => {
  Screener.update(
    {
      title: req.body.title
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbScreenerData => {
      if (!dbScreenerData) {
        res.status(404).json({ message: 'No screener found' });
        return;
      }
      res.json(dbScreenerData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', withAuth, (req, res) => {
  console.log('id', req.params.id);
  Screener.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbScreenerData => {
      if (!dbScreenerData) {
        res.status(404).json({ message: 'No screener found' });
        return;
      }
      res.json(dbScreenerData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});