const {Schema , model}  =  require('mongoose')

const userSchema = new Schema({
    caption: String,
    description: String,
    number_part: String,
    code_sap: String,
    existence: Number,
    _state: String,
    photo: String,
})

const user = model('Components',userSchema)


module.exports = user