class User {
    constructor(id,username,name,bio){
        this.id = id;
        this.username = username;
        this.name = name;
        this.bio=bio;
        this.dateCreated=new Date();
        this.lastUpdated=new Date();
    }
    get getUsername(){
        return `${this.username}`
    }
    get getBio(){
        return `${this.bio}`
    }
    get getDateCreated(){
        return `${this.dateCreated}`
    }
    get getLastUpdated(){
        return `${this.lastUpdated}`
    }
    set setUsername(new_username){
        this.username=new_username;
    }
    set setBio(new_bio){
        this.bio=new_bio;
    }
}

module.exports=User;