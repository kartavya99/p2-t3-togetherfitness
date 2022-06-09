# Together-Fitness

Together Fitness is a full stack web application where a user can register, find a workout of their liking and attend the workout by signing up for it. A user can also create their own workout and choose the activities, time, location and how many people they are looking to join the group. It is not only a fitness based application, but a social one as you can meet other user's who have similar interests in fitness as you.

## Table of Contents

- [Project Requirements](#project-requirements)
- [Installation Guide](#installation-guide)
- [Screenshots](#screenshots)
- [Technologies Used](#technologies-used)
- [Collaborators](#collaborators)
- [License](#license)
- [Links](#links)

## Project Requirements

    - Use Node.js and Express.js to create a RESTful API.
    - Use Handlebars.js as the template engine.
    - Use MySQL and the Sequelize ORM for the database.
    - Have both GET and POST routes for retrieving and adding new data.
    - Use at least one new library, package, or technology that we haven't discussed.
    - Have a folder structure that meets the MVC paradigm.
    - Include authentication (express-session and cookies).
    - Protect API keys and sensitive information with environment variables.
    - Be deployed using Heroku (with data).
    - Have a polished UI.
    - Be responsive.
    - Be interactive (i.e., accept and respond to user input).
    - Meet good-quality coding standards (file structure, naming conventions, follows best practices for class/id naming conventions, indentation, quality comments, etc).
    - Have a professional README (with unique name, description, technologies used, screenshot, and link to deployed application).

## Installation Guide

1. Clone the git repository.

2. Create your own .env file with your own MySQL username and password with the database name as workouts_db

3. Run npm install to install the dependencies.

4. Log in to your MySQL and input

   ```terminal
   source db/schema.sql;
   ```

   to access the database. Then input

   ```terminal
   use workouts_db;
   ```

   to select the correct database.

5. Once these steps have been executed, quit out of your MySQL and input

   ```terminal
   npm run seed
   ```

   to seed data to your database.

6. Once that's been done, input

   ```terminal
   npm start
   ```

   to start running the server.

## Technologies Used

1. Node.js
2. Express
3. Sequelize
4. MySQL
5. JAWSDB
6. Heroku
7. JQuery
8. Bootstrap
9. BCrypt Hash Password
10. Dotenv
11. Geolocation API
12. Google Place API

## Collaborators

Simon Browne : Front End & Back End <br />
Github: https://github.com/simmmmo <br />

Kartavya Saini: Front End & Back End <br />
Github: https://github.com/kartavya99 <br />

Andy Nguyen: Back End <br />
Github: https://github.com/androneus14 <br />

Mathew Adewale: Back End <br />
Github: https://github.com/maaadewale <br />

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Links

Deployed Application: <br />
Application Repository: https://github.com/kartavya99/p2-t3-togetherfitness <br />
Presentation: https://docs.google.com/presentation/d/18B7f3crJ3tgWrMlM5-ON6-VvWfQZBoass0P82tIiGZE/edit?usp=sharing <br />
