const express = require('express')
const {registrarUser} = require('../connection/RegistrarQuery')

const router = express.Router()

router.get('/registrousers', (req, res) => {
        res.render('registraruser')
})



router.post('/regUsers', (req, res) => {
    const user = req.body.usuario
    const password = req.body.password
    const email = req.body.correo
    const name = req.body.nombre
    const apellido = req.body.apellido
    const telefono = req.body.telefono

    console.log(user+""+password)
    registrarUser(name, apellido,email,telefono,user,password).then((
        res.send("USUARIO CREADO")
    ))  
})


module.exports = router