const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Workout extends Model {}

Workout.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },

        workout_title: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        workout_type: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        workout_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },

        workout_duration: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        workout_size: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        workout_location: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        workout_address: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        workout_description: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        user_id: {
            type: DataTypes.INTEGER,
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
        modelName: 'Workout',
    }
);

module.exports = Workout;