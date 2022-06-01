const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}

User.init(
    {
        id: {
            type: DataTypes.INTERGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        firstName: {
            type: DataTypes.STRING,
        },

        lastName: {
            type: DataTypes.STRING,
        },

        contactNo: {
            type: DataTypes.INTERGER,
            allowNull: false,
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
                args: true,
                message: "This email is already in use."
            },
        },

        myWorkouts: {
            type: DataTypes.STRING,
        },
    },

    {
        sequelize,
        modelName: 'User'
    }
);

module.exports = User;