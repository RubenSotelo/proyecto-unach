const {Tipo, Usuario} = require("../modules/models"); 
const {sq} = require("../database/conexion");

async function login(req, res) { 
    try {
        var { nombre, email, tipo } = req.body; 
        var user = await sq.query(`CALL inicio_usuario('${nombre}', '${email}', '${tipo}');`);
        res.json(user[0]); 
    } catch (error) {
        return res.status(500).json({ Error: error.message });
    }
}

async function list(req, res) {
    try {
        const { tipo } = req.params;
        const users = await sq.query(`SELECT * FROM listar('${tipo}');`);
        return users.length === 0? res.json({error: "Ningun Usuario registrado"}): res.json(users[0]);
    } catch (error) {
        return res.status(500).json({ Error: error.message });
    }   
}

async function editar(req, res) {
    try{
        const { id_usuario, nombre, email, tipo} = req.body;
        const users = await sq.query(`CALL editar_usuario('${id_usuario}', '${nombre}', '${email}', '${tipo}');`);
        return users.length === 0? res.json({error: "Ningun Usuario registrado"}): res.json(users[0]);
        
    }catch (error){
        return res.status(500).json({ Error: error.message });
    }
}

async function eliminar(req, res) {
    try {
        const { id } = req.params;
        const usuario = await Usuario.destroy({ 
            where: { id_usuario: id } 
        });
        res.json({usuario});
    } catch (error) {
        return res.status(500).json({ Error: error.message });
    }    
}

module.exports = { login, list, editar, eliminar}