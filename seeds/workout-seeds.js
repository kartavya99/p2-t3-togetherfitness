const { Workout } = require('../models');

const workoutData = [
    {
        workout_name: 'Running',
    },
    {
        workout_name: 'Walking',
    },
    {
        workout_name: 'Cycling',
    },
    {
        workout_name: 'Yoga',
    },
    {
        workout_name: 'HIIT'
    },
];

const seedWorkouts = () => Workout.bulkCreate(workoutData);

module.exports = seedWorkouts;