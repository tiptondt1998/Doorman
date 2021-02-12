const router = require('express').Router();
const { Visitor, Patient } = require('../../models');

router.post('/', (req, res) => {
    Visitor.create({
        name: req.body.name,
        phoneNumber: req.body.phoneNumber,
        roomNumber: req.body.roomNumber
      },
    //   {
    //     include: [
    //     {
    //       model: Patient,
    //       as: req.body.roomNumber
    //     }
    //   ]
    // }
    )
    .then(dbVisitorData => {
      console.log(dbVisitorData);
        res.json(dbVisitorData);
    })
    .catch(err => {
      console.log('ABCDE------------>')
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;