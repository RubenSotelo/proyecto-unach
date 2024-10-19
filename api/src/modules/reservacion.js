const { DataTypes } = require("Sequelize");
const {sq} = require("../database/conexion.js"); 

const Reservacion = sq.define( 
    "reservacion",
    {
        id_reservacion: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        dia: DataTypes.STRING,
        hora_inicio:  DataTypes.TIME,
        hora_fin: DataTypes.TIME
    },
    {
      tableName: "reservacion",
      timestamps: false,
    }
  );
module.exports = {Reservacion} 