const router = require('express').Router();
const sequelize = require('../config/connection');
const { Patient, Room, Visitor } = require('../models');

router.get('/', (req, res) => {
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

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

module.exports = router;