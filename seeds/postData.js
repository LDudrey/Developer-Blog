const { Post } = require('../models');

const postData = [
  {
    title: 'Look at this cool feature!',
    content: 'Anime.js is really cool js feature to try out! "https://animejs.com/"',
    author: 'Natalia',
    comment_date: 'December 01, 2022',
  },
  {
    title: 'Handlebars.js question?',
    content: 'What are the bulit in handlebars helpers?',
    author: 'Seth',
    comment_date: 'Septemeber 15, 2022',
  },
  {
    title: 'Sequelize hooks?',
    content: 'In what order does sequelize hooks fire?',
    author: 'Sam',
    comment_date: 'December 23, 2023',
  },
  {
    title: 'Which is better CSS framework?',
    content: 'Im currently looking at Materilize, Tailwind and Bootstrap. Which do you reccommend?',
    author: 'Lewis',
    comment_date: 'March 27, 2022',
  },
];
const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;