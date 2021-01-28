const seedNurse = require('./nurse-seeds');
const seedPatient = require('./patient-seeds');
const seedRoom = require('./room-seeds');
const seedScreener = require('./screener-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('-----Database Synced---------');
  await seedNurse();
  console.log('------Nurse Seeded--------');

  await seedPatient();
  console.log('------Patient Seeded--------');

  await seedRoom();
  console.log('-----Room Seeded---------');

  await seedScreener();
  console.log('------Screener Seeded--------');

  process.exit(0);
};

seedAll();