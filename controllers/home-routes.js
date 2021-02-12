const router = require('express').Router();
const sequelize = require('../config/connection');
const { Nurse, Patient, Visitor } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
    Patient.findAll({
        attributes: [
            'roomNumber',
            'name',
            'covidPositive',
            'finalVisit'
        ],
        include: {
            model: Visitor,
            attributes: ['name', 'phoneNumber']
        }
    })
    .then(dbPatientData => {
        const patients = dbPatientData.map(patient => patient.get({ plain: true }));
        patients.map(patient => {
            if (patient.Visitor) {
                return patient.Visitor = patient.Visitor.name + ' - ' + patient.Visitor.phoneNumber
            }
            return patient.Visitor
        });
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
    Nurse.findOne({ where: { username: username } }).then(dbNurseData => {
        if (!dbNurseData) {
            res.redirect('/login');
        } else if (!dbNurseData.validPassword(req.body.password)) {
            res.redirect('/login');
            res.status(400).json({ message: 'Incorrect password!' });
            return;
        } else {
            req.session.save(() => {
            req.session.username = dbNurseData.username;
            req.session.loggedIn = true;
            res.json({ user: dbNurseData, message: 'You are now logged in!' });
            });
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