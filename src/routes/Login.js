const express = require('express')

const router = express.Router()

router.get('/loginusers', (req, res) => {
        res.render('loginusers')
})

router.get('/loginadmin', (req, res) => {
    res.render('loginadmin')
})

router.get('/menulogin', (req, res) => {
    res.render('menulogin')
})

module.exports = router