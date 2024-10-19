const {Grupo} = require('../modules/grupo');
const {sq} = require("../database/conexion");

async function list(req, res) {
    try {
        const grupos = await Grupo.findAll();
        return grupos.length === 0? res.json({error: "Sin Grupos Registradas"}): res.json({grupos});
    } catch (error) {
        res.json({menasje:error});
    }
}

async function seleccionar(req, res) {
    try {
        const grupo = await Grupo.findOne({where: req.body.id_grupo});
        return grupo == null? res.json({error:"ID no identificado"}): res.json({grupo});
    } catch (error) {
        res.json({menasje:error});
    }
}

async function registrar(req, res) {
    try {
        const {nombre} = req.body;
        const grupo = await Grupo.create({nombre});
        res.json({grupo})
    } catch (error) {
        res.json({mensaje: error});
    }
}

async function editar(req, res) {
    try {
        const {id_grupo, nombre} = req.body;
        const grupo = await Grupo.update(
            { nombre: nombre },
            {where: { id_grupo: id_grupo }}
        );
        return !grupo[0]? res.json({error: "ID no identificado"}): res.json({mensaje:"Grupo Actualizada"});
    } catch (error) {
        res.json({grupo: error});
    }
}

async function eliminar(req, res) {
    try {
        const {id_grupo} = req.body;
        const grupo = await Grupo.destroy({ where: { id_grupo: id_grupo } });
        return !grupo? res.json({error: "ID no identificado"}): res.json({mensaje: "Grupo Eliminado"});
    } catch (error) {
        res.json({menasje:error});
    }
}

module.exports = { list, seleccionar, registrar, editar, eliminar};