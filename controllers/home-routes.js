const router = require('express').Router();
const sequelize = require('../config/connection');
const { Nurse, Patient, Room, Visitor } = require('../models');

router.get('/', (req, res) => {
    console.log('/');
    Patient.findAll({
        attributes: [
            'name',
            'roomNumber',
            'patient_id',
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
    console.log('/login');
    Nurse.findOne({
        where: {
            username: req.body.username
        }
    }).then(dbNurseData => {
        if (!dbNurseData) {
            res.status(400).json({ message: 'No user account found!' });
            return;
        }

        const validPassword = dbNurseData.checkPassword(req.body.password);
        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect password!' });
            return;
        }

        req.session.save(() => {
            req.session.username = dbNurseData.username;
            req.session.loggedIn = true;
            res.json({ user: dbNurseData, message: 'You are now logged in!' });
        });
    });
});

router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        res.session.destroy(() => {
            res.status(204).end();
        });
    }
    else {
        res.status(404).end();
    }
});

router.get('/login', (req, res) => {
    console.log('/login');
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

module.exports = router;