// API Routes when not logged in
const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

// GET all posts
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('homepage', {
      posts,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET post by ID
router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [{
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id',],
        include: {
          model: User,
          attributes: ['name']
        },
      },
      ],
    });

    const post = postData.get({ plain: true });

    res.render('singlepost', {
      post
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// https://stackoverflow.com/questions/65823202/localhost-redirected-you-too-many-times-in-nodejs-and-express-session
// Reroute to login if accesing dashboard
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Post, Comment }],
    });

    const user = userData.get({ plain: true });

    res.render('dashboard', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login route
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }
  res.render('login');
});


module.exports = router;