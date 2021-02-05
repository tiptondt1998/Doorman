const router = require('express').Router();
const sequelize = require('../config/connection');
const { Nurse, Patient, Room, Visitor } = require('../models');

router.get('/', (req, res) => {
   res.render('homepage', {
       loggedIn: req.session.loggedIn,
       body: 'a'
   });
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

module.exports = router;