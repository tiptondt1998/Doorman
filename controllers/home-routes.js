const router = require('express').Router();
const sequelize = require('../config/connection');
const { Nurse, Patient } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
    console.log('/');
    Patient.findAll({
        attributes: [
            'roomNumber',
            'name',
            /* 'patient_id', */
            'covidPositive',
            'finalVisit'
        ]
    })
    .then(dbPatientData => {
        const patients = dbPatientData.map(patient => patient.get({ plain: true }));
        console.log(req.session.loggedIn);
        res.render('homepage', {
            patients,
            loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

/* // GET /api/users
router.get('/', (req, res) => {
    Nurse.findAll({
        attributes: { exclude: ['password'] }
    })
        .then(dbNurseData => res.json(dbNurseData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
}); */

router.post('/login', (req, res) => {
    const username = req.body.username 
    console.log(req.body.password);
    Nurse.findOne({ where: { username: username } }).then(dbNurseData => {
        if (!dbNurseData) {
            console.log('1');
            res.redirect('/login');
        } else if (!dbNurseData.validPassword(req.body.password)) {
            console.log(dbNurseData);
            res.redirect('/login');
            res.status(400).json({ message: 'Incorrect password!' });
            return;
        } else {
            console.log('3');
            req.session.save(() => {
            req.session.username = dbNurseData.username;
            req.session.loggedIn = true;
            res.json({ user: dbNurseData, message: 'You are now logged in!' });
            });
            //res.redirect('/');
        }
    });
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    }
    else {
        res.status(404).end();
    }
});

module.exports = router;