class user{
    constructor(username, email){
        this.username = username
        this.email = email
    }
    get username(){
        return this._username.toUpperCase()
    }
    set username(value){
        this._username = value
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
}

const chai = new user("manish", "manishchoudhary@gmail.com")
console.log(chai.email);
console.log(chai.username);