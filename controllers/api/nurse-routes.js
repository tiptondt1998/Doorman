const router = require('express').Router();
const cookie = require('express-session/session/cookie');
const { Nurse } = require('../../models');
const withAuth= require("../../utils/auth");

router.get('/', (req, res) => {
  console.log('======================');
  Nurse.findAll({
    attributes: [
      'username',
      'password',
    ],
    include: [
      {
        model: Nurse,
        attributes: ['username', 'password'],
      },
    ]
  })
    .then(dbNurseData => res.json(dbNurseData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  Nurse.create({
      username: req.body.username,
      password: req.body.password
  })
  .then(dbUserData => {
      req.session.save(() => {
          req.session.user_id = dbUserData.id;
          req.session.username = dbUserData.username;
          req.session.loggedIn = true;

          res.json(dbUserData);
      });
  })
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
      'username',
      'password',
    ],
    include: [
      {
        model: Nurse ,
        attributes: ['username', 'password'],
      },
    ]
  })
    .then(dbNurseData => {
      if (!dbNurseData) {
        res.status(404).json({ message: 'No nurse found' });
        return;
      }
      res.cookie('auth', dbNurseData, {
        expires: new Date(Date.now() + '1440m'),
        secure: process.env.NODE_ENV === 'production' ? true : false,
        httpOnly: true,
        sameSite: 'strict'
      })
      res.set('auth', dbNurseData);
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
