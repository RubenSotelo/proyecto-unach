const {Sequelize} = require("Sequelize"); 
const env = require("../config");

const config = { 
  database: env.development.database,
  username: env.development.username,
  password: env.development.password,
  host: env.development.host,
  dialect: "postgres", 
};

const sequelize = new Sequelize(config); 

sequelize.authenticate()  
  .then(() => {
    console.log("Conectado a la base de datos ");
  })
  .catch((err) => {
    console.log("No se conecto");
  });

module.exports = { sq: sequelize }; 
