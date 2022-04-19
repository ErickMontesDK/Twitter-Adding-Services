    const UserView = require("./../../app/views/UserView")

    describe("",()=>{
        test("1-Return an error object when try to create a new user with null payload",()=>{
            const payload=null;
            const result=UserView.createUser(payload)

            expect(result.error).toMatch(/payload no existe/);
        
        })

        test("2-Return an error object whent try to create a new user with a payload with invalid properties",()=>{
            const result=UserView.createUser({username:null,name:12,id:"id"})
            expect(result.error).toMatch(/necesitan tener un valor válido/);

            const result2=UserView.createUser({username:"ErickDKnight",name:null,id:"id"})
            expect(result2.error).toMatch(/necesitan tener un valor válido/);

            const result3=UserView.createUser({username:"ErickDKnight",name:12,id:null})
            expect(result3.error).toMatch(/necesitan tener un valor válido/);
        
        })

        test("3-Return an error object when try to create a new user with a payload with missing properties",()=>{

            const result=UserView.createUser({username:55})
            expect(result.error).toMatch(/necesitan tener un valor válido/);

            const result2=UserView.createUser({name:55})
            expect(result2.error).toMatch(/necesitan tener un valor válido/);

            const result3=UserView.createUser({id:55})
            expect(result3.error).toMatch(/necesitan tener un valor válido/);

        })

        test("Create a user by a given valid payload",()=>{
            const payload={username:"ErickDKnight",id:76,name:"Eirikr"}
            const result= UserView.createUser(payload)

            expect(result.name).toBe("Eirikr");
            expect(result.username).toBe("ErickDKnight");
            expect(result.id).toBe(76);

        })
    })