const router = require('express').Router();
const { Post, User, Comment } = require('../models');

// API Routes when not logged in
// GET all posts
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
            model: User,
            attributes: ['username'],
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
      include: [
        User,
        {
          model: Comment,
          include: [User],
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

// Reroute to login if accesing dashboard
router.get('/dashboard', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }
  res.render('login');
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