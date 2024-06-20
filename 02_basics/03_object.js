//object are declared in two ways literal and sigleton with constructor 
//singloton => created by the constructor 
Object.create // singleton example

const mySym = Symbol("mysym1") // way of deaclare symbol

const jsUser = {
    name: "hitesh",
    age: 26,
    [mySym]: "mysym1",
    "full name": "amarjeet",
    email: "amarjeetchoudhary647@gmail.com",
    isLoggedin: false,
    lastLogInDays: ["monday", "saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(typeof jsUser[mySym]);
// console.log(jsUser[mySym]);

jsUser.email = "amarjeetchoudhary567@gmail.com"

//Object.freeze(jsUser)
jsUser.email = "amarjeet@chatgpt"
// console.log(jsUser);

//++++++++++++++++++++creating function

jsUser.greeting = function() {
    console.log("hello world");
}
console.log(jsUser.greeting());