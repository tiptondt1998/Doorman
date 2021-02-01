const router = require('express').Router();

const nurseRoutes = require('./nurse-routes.js');
const patientRoutes = require('./patient-routes.js');
const screenerRoutes = require('./screener-routes.js');

router.use('/nurse', nurseRoutes);
router.use('/patient', patientRoutes);
router.use('/screener', screenerRoutes);

module.exports = router;