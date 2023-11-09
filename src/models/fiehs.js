const {Schema , model}  =  require('mongoose')

const userSchema = new Schema({
    laboratorio: String,
    area: String,
    area_analitica: String,
    caption: String,
    fabricante: String,
    proveedor: String,
    code_serie: String,
    model: String,
    software: String,
    consecutivo: String,
    code_sap: String,
    code_stock: String,
    date_make:String,
    ubicacion: String,
    ceco: String,
    photo: String,
    ambientales: String,
    electricas: String,
    dimensiones: String
})

const fiehs = model('Components',userSchema)


module.exports = fiehs