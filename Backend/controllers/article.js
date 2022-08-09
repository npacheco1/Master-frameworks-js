'use strict'

const { param } = require("../app");

var controller = {

    datosCurso: (req , res) => {

        return res.status(200).send({
            curso:'Master en Frameworks JS',
            autor:'Victor Robles WEB',
            url: 'victor.robles.cl',
            hola: req.body.hola
        });
    },

    test: (req , res) => {
        return res.status(200).send({
            message: 'Soy la accion test de mi controlador de arituculos '
        });
    },

    save: (req , res) => {
        //Recoger los Parametros por post
       var  params = req.body



        //Validardatos (validator)

        //Crear el objetoa guardar 

        //devolver una respuesta 


        return res.status(200).send({
            message: 'Soy la accion params de mi controlador de arituculos ' ,
             params: params
        });
    }
};

module.exports = controller;