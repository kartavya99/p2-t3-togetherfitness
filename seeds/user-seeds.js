const { User } = require('../models');

const userData = [
    {
        user_firstName: 'Billy',
        user_lastName: 'Slater',
        user_contact: 11111110,
        user_email: 'billyslater@gmail.com',
        workouts: 'Weights',
    },

    {
        user_firstName: 'Michael',
        user_lastName: 'Scott',
        user_contact: 11111111,
        user_email: 'michaelscott@gmail.com',
        workouts: 'Run',
    },

    {
        user_firstName: 'Mike',
        user_lastName: 'Trout',
        user_contact: 11111112,
        user_email: 'miketrout@gmail.com',
        workouts: 'Cycle',
    },

    {
        user_firstName: 'Tom',
        user_lastName: 'Brady',
        user_contact: 11111113,
        user_email: 'tombrady@gmail.com',
        workouts: 'Yoga',
    },

    {
        user_firstName: 'Michael',
        user_lastName: 'Jordan',
        user_contact: 11111114,
        user_email: 'michaeljordan@gmail.com',
        workouts: 'Walk',
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;