'user strict'

var mongoose = require("mongoose");
var app = require('./app');
mongoose.Promise = global.Promise;
const port = 3000
mongoose.connect('mongodb://127.0.0.1:27017/api_rest_blog').then(()=>{
    console.log('La Conexion a la BD se ha realiado con exito!!!')
//Crear Servidor y poner a escuchar peticiones HTTP 
//prueba CAmbio

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
})



  