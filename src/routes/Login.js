const express = require('express')

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

module.exports = router