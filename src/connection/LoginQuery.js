require('./conectiondb')
const userModels = require('../models/users')


const existUser =  async(user,password) => {
    const us =  await userModels.find({user:user, password: password}).exec()
    if(us[0]){
        return true
    } else {
        return false
    }
}


module.exports = {existUser}