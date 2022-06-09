// Import models
const { attachment } = require("express/lib/response");
const Location = require("./Location");
const User = require("./User");
const Workout = require("./Workout");
const Attendee = require("./Attendee");

// Users have many workouts
User.hasMany(Workout, {
  foreignKey: "user_id",
});

// Workouts belong to Users
Workout.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "cascade",
});

User.belongsToMany(Workout, {
  through: Attendee,
  foreignKey: "user_id",
});

Workout.belongsToMany(User, {
  through: Attendee,
  foreignKey: "workout_id",
});

module.exports = {
  Location,
  User,
  Workout,
  Attendee
};
