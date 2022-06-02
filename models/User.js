const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        user_firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        user_lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        user_email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
                args: true,
                message: "This email is already in use."
            },
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

        user_password: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        workout_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "workout",
                key: "id",
            },
        },
    },

    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'User'
    },
);

module.exports = User;