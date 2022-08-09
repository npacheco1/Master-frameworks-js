'use strict'
//Cargar modulos de node para crear servidor
const express = require('express');
var ArticleController = require('../controllers/article')

var router = express.Router();
//Rutas de prueba
router.get('/test-de-controlador' , ArticleController.test)
router.post('/datos-curso' , ArticleController.datosCurso)


//rutas utiles
router.post('/save' , ArticleController.save)

module.exports = router;
