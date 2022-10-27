const { DataTypes, Model } = require('sequelize')
const sequelize = require('../db/db')

class Caja extends Model { }

Caja.init({
    NumReferencia: {
        type: DataTypes.CHAR(5),
        primaryKey: true,
        allowNull: false,
    },
    Contenido: DataTypes.TEXT(100),
    Valor: DataTypes.INTEGER,
    Almacen: DataTypes.INTEGER,
}, {
    sequelize,
    modelName: 'caja',
    freezeTableName: true,
    timestamps: false
})

module.exports = Caja