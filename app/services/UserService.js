//Importa el módulo User
const User = require("./../models/User")

class UserService {
    //Recibe los valores id, username y name
    static create(id,username,name){
        //Manda los valores y una bio al modulo User
        //Regresa un nuevo objeto con los datos del usuario enviados
        return new User (id,username,name,"Sin bio")
    }  
    //Recibe un objeto con los datos del usuario
    static getInfo(userdata){
        //Regresa un array con todos los datos del objeto
        return new Array (userdata.id, userdata.username, userdata.name,userdata.bio)
    }
    //Recibe un objeto con datos del usuario y un nuevo username
    static updateUserUsername(User,new_username){
        //Asigna al username del objeto el nuevo valor recibido
        User.username=new_username;
    }
    //Recibe 3 objetos con datos de usuarios
    static getAllUsernames([user1,user2,user3]){
        //Regresa un array con solo los usernames en los objetos
        return new Array (user1.username,user2.username,user3.username)
    }
}
//Exporta el módulo
module.exports=UserService;