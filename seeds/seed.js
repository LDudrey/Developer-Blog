const sequelize = require('../config/connection');
const { User } = require('../models');
const seedComments = require('./commentData');
const seedPosts = require('./commentData');
const userData = require('./userData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await seedPosts();

  await seedComments();

  process.exit(0);
};

seedDatabase();
