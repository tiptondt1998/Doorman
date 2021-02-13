const router = require('express').Router();

const nurseRoutes = require('./nurse-routes.js');
const patientRoutes = require('./patient-routes.js');
const screenerRoutes = require('./screener-routes.js');
const visitorRoutes = require('./visitor-routes.js');

router.use('/nurse', nurseRoutes);
router.use('/patient', patientRoutes);
router.use('/screener', screenerRoutes);
router.use('/visitor', visitorRoutes);

module.exports = router;