const {Tipo} = require('./tipo')
const {Grupo} = require('./grupo')
const {Usuario} = require('./user')
const {Materia} = require('./materia')
const {Laboratorio} = require('./laboratorio')
const {Reservacion} = require('./reservacion')


Tipo.hasOne(Usuario, {foreignKey: 'id_tipo'});

Usuario.belongsTo(Tipo, {foreignKey: "id_tipo"});

Grupo.hasOne(Reservacion, {foreignKey: 'id_grupo'});
Usuario.hasOne(Reservacion, {foreignKey: 'id_usuario'});
Materia.hasOne(Reservacion, {foreignKey: 'id_materia'});
Laboratorio.hasOne(Reservacion, {foreignKey: 'id_laboratorio'});

Reservacion.belongsTo(Grupo, {foreignKey: 'id_grupo'});
Reservacion.belongsTo(Usuario, {foreignKey: 'id_usuario'});
Reservacion.belongsTo(Materia, {foreignKey: 'id_materia'});
Reservacion.belongsTo(Laboratorio, {foreignKey: 'id_laboratorio'});

module.exports = {Tipo, Usuario, Laboratorio, Grupo, Materia}