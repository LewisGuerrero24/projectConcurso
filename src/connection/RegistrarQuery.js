require('./conectiondb')
const userModels = require('../models/users')
const componentsModels = require('../models/components')

const registrarUser =  (nombre, apellido,correo,telefono,user,password) => {
    const createUser =  new userModels({name: nombre, lastname: apellido, phone: telefono, email: correo ,user: user, password: password})
    return createUser.save();
}

const  registrarComponents =  (caption,
    description,
    number_part,
    code_sap,
    existence,
    state,
    photo) => {
    const creaComponents =  new componentsModels({
    caption: caption,
    description: description,
    number_part: number_part,
    code_sap: code_sap,
    existence: existence,
    _state:state,
    photo: photo
})
    return creaComponents.save();
}

module.exports = { registrarUser,}
