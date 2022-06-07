const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Attendee extends Model {}

Attendee.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    workout_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "workout",
        key: "id",
      },
    },

    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "attendee",
  }
);

module.exports = Attendee;
