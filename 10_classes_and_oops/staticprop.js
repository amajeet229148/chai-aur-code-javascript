class user{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(` this is my name ${this.username}`);
    }
     static createId(){   //static cant be accesable
        return `123`
    }
}

class teacher extends user{
    constructor(username, email, age, password){
        super(username)
        this.age = age
        this.email = email
        this.password = password
    }
}
const amar = new teacher("iphone")
console.log(amar.createId())

