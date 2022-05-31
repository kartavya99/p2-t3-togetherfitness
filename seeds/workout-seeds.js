const { Workout } = require('../models');

const workoutData = [
    {
        workout_name: 'Run',
    },
    {
        workout_name: 'Walk',
    },
    {
        workout_name: 'Cycle',
    },
    {
        workout_name: 'Weights',
    },
    {
        workout_name: 'HIIT',
    },
    {
        workout_name: 'Yoga',
    },
    {
        workout_name: 'Pilates',
    },
    {
        workout_name: 'All',
    },
];

const seedWorkouts = () => Workout.bulkCreate(workoutData);

module.exports = seedWorkouts;