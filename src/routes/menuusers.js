const express = require('express')
const {registrarUser} = require('../connection/RegistrarQuery')

const router = express.Router()

router.get('/menuuser/:nombre', (req, res) => {
        res.render('menuusers')
})


module.exports = router