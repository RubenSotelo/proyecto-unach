const cors = require("cors");
const morgan = require("morgan");
const express = require("express");
const config = require("./config");
const usuario = require("./routes/userRouter");
const materia = require('./routes/materiaRouter');
const grupo = require('./routes/grupoRouter');
const laboratorio = require('./routes/laboratorioRouter');
const reservacion  = require('./routes/reservacionRouter');

const server = express();

//settings
server.set("port", config.development.server_port);

//MiddleWare
server.use(morgan("dev"));
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(express.static(config.development.server_static));


//Routes
server.use(usuario);
server.use(materia);
server.use(grupo);
server.use(laboratorio);
server.use(reservacion);

module.exports = server;
