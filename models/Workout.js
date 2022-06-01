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

        workout_category: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },

    {
        sequelize,
        modelName: 'Workout',
    }
);

module.exports = Workout;