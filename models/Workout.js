const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Workout extends Model {}

Workout.init(
    {
        id: {
            type: DataTypes.INTERGER,
            allowNull: false,
            primaryKey: true
        },

        workout_title: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        workout_content: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },

    {
        sequelize,
        modelName: 'Workout',
    }
);

module.exports = Workout;