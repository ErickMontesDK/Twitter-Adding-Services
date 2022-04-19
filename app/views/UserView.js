const UserService=require('./../services/UserService');

class UserView{

    static createUser(payload){
        
        switch(payload){
            case null:
                return {error:`payload no existe`}
                break;
        }

        if(payload != null){
            if(payload.username == null || payload.name == null || payload.id == null ){
                    return {error: `necesitan tener un valor válido`}
            }
            else return UserService.create(payload.id,payload.username,payload.name)
        }
    }
}

module.exports=UserView