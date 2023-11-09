const express = require('express')
const {existUser, existAdmin} = require('../connection/LoginQuery')

const router = express.Router()

router.get('/registrousers', (req, res) => {
        res.render('registraruser')
})


// router.post('/admin', (req, res) => {
//     const user = req.body.usuario
//     const password = req.body.password
//     console.log(user+""+password)
//     existAdmin(user, password).then((result) => {
//         if(result === true) {
//             console.log("Datos enviado con éxito = "+user+""+password)
//             res.send('usuario logueado')
//         }else{
//             res.send('Error User no Existe')
//             }    
//     });
// })


module.exports = router