const router = require('express').Router();

const nurseRoutes = require('./nurse-routes.js');
const patientRoutes = require('./patient-routes.js');
const roomRoutes = require('./room-route.js');
const screenerRoutes = require('./screener-route.js');

router.use('/nurse', nurseRoutes);
router.use('/patient', patientRoutes);
router.use('/room', roomRoutes);
router.use('/screener', screenerRoutes);

module.exports = router;