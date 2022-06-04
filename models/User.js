const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        message: "This email is already in use.",
      },
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    user_postcode: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    user_gender: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    },

    user_age: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    user_bio: {
        type: DataTypes.STRING,
    },
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

module.exports = User;