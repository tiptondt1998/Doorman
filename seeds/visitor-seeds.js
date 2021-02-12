const { Visitor } = require("../models");
const visitordata = [
  {
    id: 1,
    name: 'John Appleseed',
    phoneNumber: 123456,
    roomNumber: '100'
  },
  {
    id: 2,
    name: 'Joe Smith',
    phoneNumber: 78910,
    roomNumber: '222'
  },
  {
    id: 3,
    name: 'Carlo Buonaparte',
    phoneNumber: 11121314,
    roomNumber: '322'
  },
  {
    id: 4,
    name: 'Maximus',
    phoneNumber: 15161718,
    roomNumber: '455'
  },

];

const seedVisitor = () => Visitor.bulkCreate(visitordata);

module.exports = seedVisitor;