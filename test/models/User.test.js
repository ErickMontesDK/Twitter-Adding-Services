const User=require("../../app/models/User")
describe("Unit Test para la User class",()=>{
    test("Crear un objeto user",()=>{

        const user = new User (76,"ErickDKnight","Eirikr","Solo soy un hombre simple que intenta abrirse camino en el universo","mayo 2013","2 de febrero 2022");

        expect(user.id).toBe(76);
        expect(user.username).toBe("ErickDKnight");
        expect(user.name).toBe("Eirikr");
        expect(user.bio).toBe("Solo soy un hombre simple que intenta abrirse camino en el universo");
        expect(user.dateCreated).not.toBeUndefined();
        expect(user.lastUpdated).not.toBeUndefined();
    });

    test("Adding getters",()=>{

        const user2=new User (76,"ErickDKnight","Eirikr","Solo soy un hombre simple que intenta abrirse camino en el universo","mayo 2013","2 de febrero 2022");
        expect(user2.getUsername).toBe("ErickDKnight");
        expect(user2.getBio).toBe("Solo soy un hombre simple que intenta abrirse camino en el universo");
        expect(user2.getDateCreated).not.toBeUndefined();
        expect(user2.getLastUpdated).not.toBeUndefined();
    })

    test("Adding setters",()=>{
        const user3=new User (76,"ErickDKnight","Eirikr","Solo soy un hombre simple que intenta abrirse camino en el universo","mayo 2013","2 de febrero 2022");

        user3.setUsername="Erick";
        user3.setBio="I'm Batman";

        expect(user3.username).toBe("Erick");
        expect(user3.bio).toBe("I'm Batman");

    })
})