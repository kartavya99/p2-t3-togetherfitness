const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Workout extends Model {}

Workout.init (
    {
        id: {
            type: DataTypes.INTERGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        workout_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },

    {
        sequelize,
        timestamps: false,
        freeTableName: true,
        underscored: true,
        modelName: 'workout',
    }
);

module.exports = Workout;