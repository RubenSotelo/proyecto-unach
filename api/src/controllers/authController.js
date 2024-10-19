const {Usuario} = require("../modules/models")


async function authUser(req, res) {
    try {
        console.log("Hola");
        
        const {email} = req.params;
        console.log(email);
        
        const emailNuevo = email.toUpperCase(); 
        console.log(emailNuevo);
        
        const user = await Usuario.findOne({where: {email:emailNuevo}, include: [{
                association: 'tipo',
                attributes:['nombre'],
                required: true
            }]
        });
        console.log(user);
        
        return res.json(user);
    } catch (error) {
        return null;
    }
}

module.exports = {authUser}