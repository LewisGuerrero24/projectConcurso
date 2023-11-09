const express = require('express')
const {registrarUser} = require('../connection/RegistrarQuery')

const router = express.Router()

router.get('/menuuser/:nombre', (req, res) => {
        res.render('menuusers')
})

router.get('/menuAdmin/:nombre', (req, res) => {
        res.render('menuAdmin')
})


module.exports = router