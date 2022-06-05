const User = require("./User");
const Workout = require("./Workout");

// one to many
User.hasMany(Workout, {
  foreignKey: "user_id",
  onDelete: "cascade",
});

//one to one
Workout.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = {
  User,
  Workout,
};
