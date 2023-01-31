# Developer-Blog

    
  ## Description
 This application was built imitating popular CMS (Content Management System) style blogs like Wordpress. It was built following the MVC (Model-View-Controller) architectural structure. I used Handlebars.js as the templating language, Sequelize as the ORM (Object-Relational Mapping), and the express-session npm package for authentication. An deployed to Heroku using JAWSDB enviorment variable. 

  ## License
  
  [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Questions](#questions)
  
  ## Installation
  
  In order to run this application in your personal workspace you will need to have Node.js installed and also install npm packages. Then clone this repo to your repository. 

  Use these following commands:

    npm install

  Ensure that MySQL2, Sequelize, bcrypt, dotenv, express-handlebars, express-session, connect-session-sequelize and Express.js are installed.
   
  ## Usage
  
  https://lad-developerblog.herokuapp.com/

  This application is deployed to Heroku to view the functionality without installation. Otherwise after following the above installation steps the following commands will seed and start your local server. 

  Start MySQL database using the following commands:

    mysql -u root -p
    "Enter your password"
    source db/schema.sql
    exit

  In your terminal:
    
    npm run seed
    npm start


  ## Contributing
  
  No contribution to this repo
   
  ## Questions
  
  Any questions please contact me at: ladudrey@gmail.com. 
  More examples of my work are available at [GitHub](https://github.com/LDudrey).