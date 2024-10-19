const {Materia} = require('../modules/materia');
const {sq} = require("../database/conexion");

async function list(req, res) {
    try {
        const materias = await Materia.findAll();
        return materias.length === 0? res.json({error: "Sin Materias Registradas"}): res.json({materias});
    } catch (error) {
        res.json({menasje:error});
    }
}

async function seleccionar(req, res) {
    try {
        const materia = await Materia.findOne({where: req.body.id_materia});
        return materia == null? res.json({error:"ID no identificado"}): res.json({materia});
    } catch (error) {
        res.json({menasje:error});
    }
}

async function registrar(req, res) {
    try {
        const {nombre} = req.body;
        const materia = await Materia.create({nombre});
        res.json({materia})
    } catch (error) {
        res.json({mensaje: error});
    }
}

async function editar(req, res) {
    try {
        const {id_materia, nombre} = req.body;
        const materia = await Materia.update(
            { nombre: nombre },
            { where: { id_materia: id_materia }}
        );
        return !materia[0]? res.json({error:"ID no identificado"}): res.json({mensaje:"Grupo Actualizada"});
    } catch (error) {
        res.json({materia: error});
    }
}

async function eliminar(req, res) {
    try {
        const {id_materia} = req.body;
        const materia = await Materia.destroy({ where: { id_materia: id_materia } });
        return !materia? res.json({error: "ID no identificado"}): res.json({mensaje: "Materia Eliminado"});
    } catch (error) {
        res.json({menasje:error});
    }
}

module.exports = { list, seleccionar, registrar, editar, eliminar};