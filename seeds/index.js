const seedNurse = require('./nurse-seeds');
const seedPatient = require('./patient-seeds');
const seedRoom = require('./room-seeds');
const seedScreener = require('./screener-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedNurse();
  console.log('--------------');

  await seedPatient();
  console.log('--------------');

  await seedRoom();
  console.log('--------------');

  await seedScreener();
  console.log('--------------');

  process.exit(0);
};

seedAll();