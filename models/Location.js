const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Location extends Model {}

Location.init(
    {
        id: {
            type: DataTypes.INTERGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        location_region: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }
)

module.exports = Location;

// Incomplete. 