const { Post } = require('../models');

const postData = [
  {
    title: 'Look at this cool feature!',
    content: 'Anime.js is really cool js feature to try out! "https://animejs.com/"',
    post_date: '2022-12-01 07:30:00',
    user_id: 2,
  },
  {
    title: 'Handlebars.js question?',
    content: 'What are the bulit in handlebars helpers?',
    post_date: '2022-09-15 12:15:00',
    user_id: 4,
  },
  {
    title: 'Sequelize hooks?',
    content: 'In what order does sequelize hooks fire?',
    post_date: '2023-12-23 8:24:00',
    user_id: 1,
  },
  {
    title: 'Which is better CSS framework?',
    content: 'Im currently looking at Materilize, Tailwind and Bootstrap. Which do you reccommend?',
    post_date: '2022-03-27 15:36:00',
    user_id: 3,
  },
];
const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;