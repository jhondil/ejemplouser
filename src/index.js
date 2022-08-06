// traer el modulo express
const express = require('express');
// traer el modulo o
const mongoose = require('mongoose');

// traer el modulo dotenv para crear variables de entorno
require('dotenv').config();

// traar las rutas
const rouUser = require('./routes/user');




// ejecuta express
const app = express();

// constante del puerto(porcess.env.PORT es de node)
const port = process.env.PORT || 3000;

// ayuda para que la respuesta la devuelva en json
app.use(express.json());
// tipo de variable para que la url comience con /api
app.use('/api', rouUser);


// rutas de las aplicaciones

// recibe el dos aprametros , uno de respuesta y de petición
app.get('/', (req, res) => {

    res.send('Api para usuarios');


});


// conexión a la base de datos mongodb

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log('DB conectada'))
    .catch(err => console.log(err));




// para que el servidor escuche en el puerto 3000
app.listen(port, () => console.log('servicio en el puerto 3000', port)); 