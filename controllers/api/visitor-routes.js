const router = require('express').Router();
const { Visitor } = require('../../models');

router.post('/', (req, res) => {
    Visitor.create({
        name: req.body.name,
        phoneNumber: req.body.phoneNumber
      }
    )
    .then(dbVisitorData => {
      console.log(dbVisitorData);
        res.json(dbVisitorData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = Visitor;