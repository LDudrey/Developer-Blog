const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

// New Sequelize Store using express-session package
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Localhost Port
const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with helpers
const hbs = exphbs.create({ helpers });

// Configure session object with Sequelize store
// https://expressjs.com/en/resources/middleware/cookie-session.html
const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 300000,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

// Store express-session as Express.js middleware
app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening on port 3001'));
});