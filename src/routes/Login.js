const express = require('express')
const {existUser} = require('../connection/LoginQuery')

const router = express.router()

router.get('/loginusers', (req, res) => {
        ress.render('loginusers')
})

router.get('/loginadmin', (req, res) => {
    res.render('loginadmin')
})

router.get('/menulogin', (req, res) => {
    res.render('menulogin')
})

router.post('/procesar', (req, res) => {
    const user = req.body.usuario
    const password = req.body.password
    console.log(user+""+password)
    existUser(user, password).then((result) => {
        if(result === true) {
            console.log("Datos enviado con éxito = "+user+""+password)
            res.redirect(`/profile/${user}`)
        }else{
            res.send('Error User no Existe')
            }    
    });
})


module.exports = router