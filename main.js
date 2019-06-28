/*
    Autor: Delia Macias Urzua
    correo: demamaciasur@ittepic.edu.mx
    NoControl: 15401021
    Instituto Tecnológico de Tepic
*/
//conection

var mongoose = require('mongoose');
var schema = require('./schema');

mongoose.connect('mongodb://localhost:27017/test',{useNewUrlParser: true, useFindAndModify: false  });

//MODELO 
//Parameters , mode name, shcema,collection name
//                        nombre del modelo  coleccion en la base de atos
var User = mongoose.model('User2',schema,'users2');

//DOCUMENTO (al guardar un elemento)


function post(user){
    user.save((error) => {
        if(error){
            console.log(error);
            process.exit(1);
        }
        console.log("Saved!!");
        process.exit(0);
    });
}


function getAll(){
    User.find({}, (error, docs) => {
        if (error) {
            console.log(error);
            process.exit(1);
        }
        console.log("<----------Consulta General--------->");
        console.log(docs);
        process.exit(0);
    });
}

function getByEmail(email){
    //find --todos
    //findOne -- solo uno
    User.findOne({email:email}, (error, docs) => {
        if (error) {
            console.log(error);
            process.exit(1);
        }
        console.log("<----------Consulta por Email:--------->");
        console.log(docs);
        process.exit(0);
    });
}

function put(email,user){                     //retornar documento nuevo
    User.findOneAndUpdate({email:email}, user, {new:true}, (error,docs) => {
        if (error) {
            console.log(error);
            process.exit(1);
        }
        console.log("<--------Actualización--------->");
        console.log(docs);
        process.exit(0);
    });
}

    

function delet(email){
    User.findOneAndRemove ({email:email},  (error,docs) => {
        if (error){
            console.log(error);
            process.exit(1);
        }
        console.log("<-----------Eliminado----------->")
        console.log(docs);
        process.exit(0);
    });
}
var busqueda="iarjona@tecnm.com";
var act={
    name: "Vizcaino3",
    //email: "iarjona@tecnm.com"
}



var user = new User({
    name: 'TheMickyeBMO',
    email: 'themickyebmo@gmail.com'
});
post(user);
getAll();
getByEmail(busqueda);
put(busqueda,act);
delet(busqueda);



