const seedNurse = require('./nurse-seeds');
const seedPatient = require('./patient-seeds');
const seedScreener = require('./screener-seeds');
const seedVisitor = require('./visitor-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('-----Database Synced---------');
  await seedNurse();
  console.log('------Nurse Seeded--------');
  await seedPatient();
  console.log('------Patient Seeded--------');
  await seedScreener();
  console.log('------Screener Seeded--------');
  await seedVisitor();
  console.log('------Visitor Seeded--------');
  
  process.exit(0);
};

seedAll();