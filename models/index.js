// Import models
const Location = require("./Location");
const User = require("./User");
const Workout = require("./Workout");

// // Workouts belongsTo Users
// Workout.belongsTo(User, {
//     foreignKey: "user_id",
// });

// // Users have many workouts
// User.hasMany(Workout, {
//     foreignKey: "user_id",
// });

// // Workouts have many Users
// Workout.hasMany(User, {
//     foreignKey: "user_id",
// });

// one to many
User.hasMany(Workout, {
  foreignKey: "user_id",
});

//one to one
Workout.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "cascade",
});

module.exports = {
  Location,
  User,
  Workout,
};
