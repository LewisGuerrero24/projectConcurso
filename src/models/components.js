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

const component = model('Components',userSchema)


module.exports = component