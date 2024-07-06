class user{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`this i chai ${this.username}`);
    }
}

class teacher extends user{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }
    adcourse(){
        console.log(`tis is new course ${this.username}`);
    }
}

const chai = new teacher("manish")
const tea = new user("amarjeet")

console.log(tea instanceof teacher);
