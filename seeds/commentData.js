const { Comment } = require('../models');

const commentData = [
  {
    comment_text: 'I find this very interesting!',
    comment_date: '2022-12-15 07:05:00',
    post_id: 1,
    user_id: 1,
  },
  {
    comment_text: 'Try this link "https://handlebarsjs.com/guide/builtin-helpers.html" for the handlebars documentation on helpers.',
    comment_date: '2022-10-6 10:12:00',
    post_id: 2,
    user_id: 2,
  },
  {
    comment_text: 'beforeBulk" "() comes first before the standard before() then the after" "(). Here is documentation. "https://sequelize.org/docs/v6/other-topics/hooks/" ',
    comment_date: '2023-01-15 15:19:00',
    post_id: 3,
    user_id: 3,
  },
  {
    comment_text: 'I prefer using Bootstrap because of the through documentation. Tailwind is also really great but there is a paywall for some of their features. An Materialize is great for a freebie.',
    comment_date: '2022-03-28 12:19:00',
    post_id: 4,
    user_id: 4,
  },
];
const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;