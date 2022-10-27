const { DataTypes, Model } = require('sequelize')
const sequelize = require('../db/db')

class Almacen extends Model {}

Almacen.init({
    codigo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    lugar: DataTypes.STRING,
    capacidad: DataTypes.INTEGER,
}, {
    sequelize,
    modelName: 'almacen',
    freezeTableName: true,
    timestamps: false
})

module.exports = Almacen