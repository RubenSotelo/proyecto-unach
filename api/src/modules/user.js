const { DataTypes } = require("Sequelize");
const {sq} = require("../database/conexion.js"); 

const Usuario = sq.define( 
    "usuario",
    {
        id_usuario: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: DataTypes.STRING,
        email:  DataTypes.STRING,
    },
    {
      tableName: "usuario",
      timestamps: false,
    }
  );
module.exports = {Usuario} 