const sequelize = require("../config/connection");
const { User, Workout, Attendee } = require("../models");

const userData = require("./userData.json");
const workoutData = require("./workoutData.json");
const attendeeData = require("./attendeeData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");

  const users = await User.bulkCreate(userData, { individualHooks: true });
  console.log("\n----- USERS SEEDED -----\n");

  const workouts = await Workout.bulkCreate(workoutData);
  console.log("\n----- WORKOUTS SEEDED -----\n");

  const attendee = await Attendee.bulkCreate(attendeeData, {
    individualHooks: true,
  });

  process.exit(0);
};

seedDatabase();
