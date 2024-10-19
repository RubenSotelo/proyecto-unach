const {Laboratorio} = require('../modules/laboratorio');
const {sq} = require("../database/conexion");

async function list(req, res) {
    try {
        const laboratorios = await Laboratorio.findAll();
        return laboratorios.length === 0? res.json({error: "Sin laboratorios Registradas"}): res.json({laboratorios});
    } catch (error) {
        res.json({menasje:error});
    }
}

async function seleccionar(req, res) {
    try {
        const laboratorio = await Laboratorio.findOne({where: req.body.id_laboratorio});
        return laboratorio == null? res.json({error:"ID no identificado"}): res.json({laboratorio});
    } catch (error) {
        res.json({menasje:error});
    }
}

async function registrar(req, res) {
    try {
        const {nombre} = req.body;
        const laboratorio = await Laboratorio.create({nombre});
        res.json({laboratorio})
    } catch (error) {
        res.json({mensaje: error});
    }
}

async function editar(req, res) {
    try {
        const {id_laboratorio, nombre} = req.body;
        const laboratorio = await Laboratorio.update(
            { nombre: nombre },
            { where: { id_laboratorio: id_laboratorio }}
        );
            return !laboratorio[0]? res.json({error: "ID no identificado"}): res.json({mensaje:"Laboratorio Actualizada"});
    } catch (error) {
        res.json({laboratorio: error});
    }
}

async function eliminar(req, res) {
    try {
        const {id_laboratorio} = req.body;
        const laboratorio = await Laboratorio.destroy({ where: { id_laboratorio: id_laboratorio } });
        return !laboratorio? res.json({error: "ID no identificado"}): res.json({mensaje: "Laboratorio Eliminado"});
    } catch (error) {
        res.json({menasje:error});
    }
}

module.exports = { list, seleccionar, registrar, editar, eliminar};