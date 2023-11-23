const express = require('express');
const router = express.Router();

const pool = require('../database');

router.get('/agregar', (req, res) =>{
    res.render('datos/agregar');
});



module.exports = router;