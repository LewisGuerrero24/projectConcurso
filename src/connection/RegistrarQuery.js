require('./conectiondb')
const userModels = require('../models/users')

const registrarUser =  (user,password) => {
    const createUser =  new userModels({user: user, password: password})
    createUser.save().then(() => console.log('UsuarioCreado'));
}


module.exports = { registrarUser,}
