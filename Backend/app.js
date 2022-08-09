'use strict'

//Cargar modulos de node para crear servidor
const express = require('express')
var bodyParser = require('body-parser');

//Ejecutar expressd (http)
const app = express()

//Cargar ficheros rutas
var article_routes = require('./routes/article')

//Middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//CORS

//Añadir prefijos a rutas
app.use('/api',article_routes);

// exportar el modulo (fichero actual)
module.exports = app;

