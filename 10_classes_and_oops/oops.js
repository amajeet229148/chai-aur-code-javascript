//object literal

// const user = {
//     username: "amarjeet choudhary",
//     age: 23,
//     isloggedin: true,

//     getuserdetails: function(){
//         console.log("get the all user details");
//     }
// }
// // console.log(user.username);
// // console.log(user.getuserdetails());
// console.log(this);


// ///+++++++++++++++++constructor function 

//++++++++constructor enable us to create multiple instances from one object literals

//++++example---
//++++new is a constructor
//// constructor always gives a new instances 
// const promise = new promise() //new is a constructor
// const date = new date() //new is a contsructor


function user(username, isloggedin, age){
this.username = username;
this.isloggedin = isloggedin;
this.age = age;

//return this    //++++we dont have need to return it is given defaulty define implictly
}

const userTwo = new user('amarjeet', true, 25)
const usertwo = new user('manish', false, 34)

console.log(userTwo.username);
console.log(userTwo);
console.log(usertwo);