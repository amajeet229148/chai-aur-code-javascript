//arrow function has h (this) keyword used for refer current context

const user = {
    username: "amarjeet",
    price: 9999,
    
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to the website`);
        // console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "manish"
// user.welcomeMessage()
// console.log(this);


//The global object inside the browser is the window object.

// function chai(){
//     let username = "manish"
//     console.log(this.username); //we can't use the keyword in function it is only useable in objects
// }
// chai()

// examples of arrow function

// const chai = () => {     // cant be use in function in arrrow function
//     username: "masnsh"
//     console.log(this.username);
// }
// chai()

//+++++explicit return example

// const addTwo = (num, num2) => {
//     return num + num2
// }
// console.log(addTwo(3, 5))


//+++ implicit return in arrow function 

// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "amarjeet"})
console.log(addTwo(5, 8));