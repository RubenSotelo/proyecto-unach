const {sq} = require("../database/conexion");
const {Reservacion} = require('../modules/reservacion');

async function list(req, res) {
    try {
        const users = await sq.query(`SELECT * FROM reservaciones();`);
        return users.length === 0? res.json({error: "Ninguna Reservacion registrada"}): res.json(users[0]);
    } catch (error) {
        res.json({menasje:error});
    }
}

async function seleccionar(req, res) {
    try {
        const reservacion = await Reservacion.findOne({where: req.body.id_reservacion});
        return reservacion == null? res.json({error:"ID no identificado"}): res.json({reservacion});
    } catch (error) {
        res.json({menasje:error});
    }
}

async function registro(req, res) {
    try {
        var { dia, hora_inicio, hora_fin, grupo, usuario, materia, laboratorio} = req.body;
        var reservacion = await sq.query(`CALL registrar_reservacion('${laboratorio}', '${usuario}', '${materia}', '${grupo}', '${dia}', '${hora_inicio}', '${hora_fin}');`);
        return res.json(reservacion);
    } catch (error) {
        return res.status(500).json({ Error: error.message });
    }
}

async function editar(req, res) {
    try {
        
    } catch (error) {
        
    }
}

async function eliminar(req, res) {
    try {
        
    } catch (error) {
        
    }
}

module.exports = {list, registro, seleccionar, editar, eliminar}