const sequelize = require("../config/connection");
const { User, Workout } = require("../models");

const userData = require("./userData.json");
const workoutData = require("./workoutData.json");

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    const users = await User.bulkCreate(userData);
    console.log('\n----- USERS SEEDED -----\n');

    const workouts = await Workout.bulkCreate(workoutData);
    console.log('\n----- WORKOUTS SEEDED -----\n');

    process.exit(0);
};

seedDatabase();
