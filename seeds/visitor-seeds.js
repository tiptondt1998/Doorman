const { Visitor } = require("../models");
const visitordata = [
  {
    id: 1,
    name: 'visitor1',
    phoneNumber: '123456',
    roomNumber: '1'
  },
  {
    id: 2,
    name: 'visitor2',
    phoneNumber: '78910',
    roomNumber: '2'
  },
  {
    id: 3,
    name: 'visitor3',
    phoneNumber: '11121314',
    roomNumber: '3'
  },
  {
    id: 4,
    name: 'visitor4',
    phoneNumber: '15161718',
    roomNumber: '4'
  },

];

const seedVisitor = () => Visitor.bulkCreate(visitordata);

module.exports = seedVisitor;