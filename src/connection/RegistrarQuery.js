require('./conectiondb')
const userModels = require('../models/users')

const registrarUser =  (nombre, apellido,correo,telefono,user,password) => {
    const createUser =  new userModels({name: nombre, lastname: apellido, phone: telefono, email: correo ,user: user, password: password})
    return createUser.save();
}


module.exports = { registrarUser,}
