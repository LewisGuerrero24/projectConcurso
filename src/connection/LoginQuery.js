require('./conectiondb')
const userModels = require('../models/users')
const adminModels = require('../models/admin')


const existUser =  async(user,password) => {
    const us =  await userModels.find({user:user, password: password}).exec()
    if(us[0]){
        return true
    } else {
        return false
    }
}

const existAdmin =  async(user,password) => {
    const us =  await adminModels.find({user:user, password: password}).exec()
    if(us[0]){
        return true
    } else {
        return false
    }
}


module.exports = {existUser, existAdmin}