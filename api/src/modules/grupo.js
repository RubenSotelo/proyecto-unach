const { DataTypes } = require("Sequelize");
const {sq} = require("../database/conexion.js"); 

const Grupo = sq.define( 
    "grupo",
    {
        id_grupo: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: DataTypes.STRING,
    },
    {
      tableName: "grupo",
      timestamps: false,
    }
  );
module.exports = {Grupo}