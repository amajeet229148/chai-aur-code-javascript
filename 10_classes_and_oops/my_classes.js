// class user {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email; 
//         this.password = password;
//     }
//     encryptpassword(){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new user("amarjeet", "amarjeetchoudhary647@gmail.com", "12309877");

// console.log(chai.encryptpassword());


function user1(username, email, password){
    this.password = password;
    this.email = email;
    this.username = username;
}

user1.prototype.changepassword = function(){
    return `${this.password}abc`
}
user1.prototype.changeusername = function(){
    return `${this.username.toUpperCase()}`
}

const chai = new user1("manish", "manishchoudhary2@gmail.com", "12349")

console.log(chai.changeusername());
console.log(chai.changepassword());