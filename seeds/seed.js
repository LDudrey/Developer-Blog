const sequelize = require('../config/connection');
const { User } = require('../models');

// Seed files
const seedComments = require('./commentData');
const seedPosts = require('./postData');
const userData = require('./userData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
  });

  await seedPosts();

  await seedComments();

  process.exit(0);
};

seedDatabase();
