function user(username){
    //complex db calls
  this.username = username
}

function createuser(username, email, age){
    user.call(this, username)

    this.email = email
    this.age = age
}

const chai = new createuser("amarjeet", "amarjeetchudhary647@gmail.com", 67)

console.log(chai);