//Importa el modulo UserService
const UserService = require("./../../app/services/UserService")

//Creacion de pruebas
describe("Unit Test for UserService class",()=>{
    test("1°-Create an User object",()=>{
        //Manda los datos al método estatico create y lo almacena en user
        const user = UserService.create(76,"ErickDKnight","Eirikr");
        //Lectura de los datos en user
        expect(user.id).toBe(76);
        expect(user.username).toBe("ErickDKnight");
        expect(user.name).toBe("Eirikr");
        expect(user.bio).not.toBeUndefined();
    });

    test("2°-Get all data in a list",()=>{
        //Manda los datos al método estatico create y lo almacena en User
        const User = UserService.create(76,"ErickDKnight","Eirikr");
        //Manda el objeto User al método estático getInfo, almacena respuesta en userInfoList
        const userInfoList = UserService.getInfo(User)
        //Lectura de la respuesta (array) de getInfo
        expect(userInfoList[0]).toBe(76);
        expect(userInfoList[1]).toBe("ErickDKnight");
        expect(userInfoList[2]).toBe("Eirikr");
        expect(userInfoList[3]).toBe("Sin bio");
    })

    test("3°-Setting a new Username with updateUserUsername",()=>{
        //Manda los datos al método estatico create y lo almacena en User
        const User = UserService.create(76,"ErickDKnight","Eirikr");
        //Manda el objeto User y el nuevo username al método updateUserUsername
        UserService.updateUserUsername(User,"ErickMontesDK")
        //Lectura del nuevo username en el objeto User
        expect(User.username).toBe("ErickMontesDK")
    })

    test("4°-List of username",()=>{
        //Creacion de tres objetos user
        const user1 = UserService.create(76,"ErickDKnight","Eirikr");
        const user2 = UserService.create(77,"Batman77","Bruce Wayne");
        const user3 = UserService.create(78,"Flash78","Barry Allen");
        //Envia los 3 objetos al método getAllUsernames y almacena respuesta en usernames
        const usernames=UserService.getAllUsernames([user1,user2,user3]);
        //Revisa si usernames contiene el username de cada objeto user
        expect(usernames).toContain("ErickDKnight");
        expect(usernames).toContain("Batman77");
        expect(usernames).toContain("Flash78");
    })
})