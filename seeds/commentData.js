const { Comment } = require('../models');

const commentData = [
  {
    comment: 'I find this very interesting!',
    username: 'Sam',
    comment_date: 'December 15, 2022',
    post_id: 1,
  },
  {
    comment: 'Try this link "https://handlebarsjs.com/guide/builtin-helpers.html" for the handlebars documentation on helpers.',
    username: 'Natalia',
    comment_date: 'October 6, 2022',
    post_id: 2,
  },
  {
    comment: 'beforeBulk" "() comes first before the standard before() then the after" "(). Here is documentation. "https://sequelize.org/docs/v6/other-topics/hooks/" ',
    username: 'Lewis',
    comment_date: 'January 15, 2023',
    post_id: 3,
  },
  {
    comment: 'I prefer using Bootstrap because of the through documentation. Tailwind is also really great but there is a paywall for some of their features. An Materialize is great for a freebie.',
    username: 'Seth',
    comment_date: 'March 28, 2022',
    post_id: 4,
  },
];
const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;