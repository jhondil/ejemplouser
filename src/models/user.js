// modelo de lso usuarios schema(esquima)

const mongoose = require('mongoose');

const schemaUser = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    }


});


//  exportal el modelo usuario
module.exports = mongoose.model('User', schemaUser);


