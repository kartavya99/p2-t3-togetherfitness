const { User, Workout } = require("../models");
// const seedLocations = require('./location-seeds');

const sequelize = require("../config/connection");

const userData = require("./user-seeds");
const workoutData = require("./workout-seeds");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const seedUsers = () => User.bulkCreate(userData);

  const seedWorkouts = () => Workout.bulkCreate(workoutData);

  process.exit(0);
};

seedDatabase();

// const seedAll = async () => {
//   await sequelize.sync({ force: true });
//   console.log("\n----- DATABASE SYNCED -----\n");

//   await seedWorkouts();
//   console.log("\n----- WORKOUTS SEEDED -----\n");

//   await seedUsers();
//   console.log("\n----- USERS SEEDED -----\n");

//   // await seedLocations();
//   // console.log('\n----- LOCATIONS SEEDED -----\n');

//   process.exit(0);
// };

// seedAll();
