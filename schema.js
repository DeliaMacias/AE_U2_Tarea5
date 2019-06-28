/*
    Autor: Delia Macias Urzua
    correo: demamaciasur@ittepic.edu.mx
    NoControl: 15401021
    Instituto Tecnológico de Tepic
*/
var mongoose = require('mongoose');


module.exports = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required:true,
        match: /.+@.+\..+/,
        lowercase:true
    },
    loggedInCount: {
        type:Number,
        default:0
    }
});

