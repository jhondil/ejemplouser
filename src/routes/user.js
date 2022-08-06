// traer el modulo express
const express = require('express');

const schemaUser = require('../models/user');

// se crea un constructor de express

const rou  =  express.Router();


// crear usuario

rou.post('/users', (req, res) => {
    // crear un nuevo usuario
    const user = schemaUser(req.body); // req.body  los datos del modelo

   
    user
        .save() // guardar la data en mongo
        .then((data) => res.json(data)) // responder al cliente con la respuesta (body)
        .catch((err) => res.json({message:err})); //respondemos con un error

})


// obtener todos los usuarios

rou.get('/users', (req, res) => {

    schemaUser
        .find() // encontrar la data en mongo
        .then((data) => res.json(data)) // responder al cliente con la respuesta (body)
        .catch((err) => res.json({message:err})); //respondemos con un error

})


// obtener un usario por id

rou.get('/users/:id', (req, res) => {

    const {id} = req.params; // obtener el id del usuario
    schemaUser
        .findById(id) // encontrar el usuario por id
        .then((data) => res.json(data)) // responder al cliente con la respuesta (body)
        .catch((err) => res.json({message:err})); //respondemos con un error

})


// acualizar un usario

rou.put('/users/:id', (req, res) => {

    const {id} = req.params; // obtener el id del usuario
    const {name,age,email} = req.body; // traemos la data(name, age, user) del  usuario
    schemaUser
        .updateOne({_id:id},{$set: {name,age,email}}) // encontrar la data en mongo y actualizar
        .then((data) => res.json(data)) // responder al cliente con la respuesta (body)
        .catch((err) => res.json({message:err})); //respondemos con un error

})


// eliminar un usario
rou.delete('/users/:id', (req, res) => {

    const {id} = req.params; // obtener el id del usuario
 
    schemaUser
        .remove({_id:id}) // encontrar el user por id en mongo y eliminarlo
        .then((data) => res.json(data)) // responder al cliente con la respuesta (body)
        .catch((err) => res.json({message:err})); //respondemos con un error

})




// exportar el modulo router
module.exports = rou;