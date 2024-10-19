const { DataTypes } = require("Sequelize");
const {sq} = require("../database/conexion.js"); 

const Materia = sq.define( 
    "materia",
    {
        id_materia: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: DataTypes.STRING,
    },
    {
      tableName: "materia",
      timestamps: false,
    }
  );
module.exports = {Materia}


