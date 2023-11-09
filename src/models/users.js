const {Schema , model}  =  require('mongoose')

const userSchema = new Schema({
    name: String,
    lastname: String,
    phone: String,
    email: String,
    user: String,
    password: String
})

const user = model('Users',userSchema)


module.exports = user