const { DataTypes } = require("Sequelize");
const {sq} = require("../database/conexion.js"); 

const Laboratorio = sq.define( 
    "laboratorio",
    {
        id_laboratorio: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: DataTypes.STRING,
    },
    {
      tableName: "laboratorio",
      timestamps: false,
    }
  );
module.exports = {Laboratorio}