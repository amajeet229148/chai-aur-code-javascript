const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
// Math.PI = 5
// console.log(Math.PI);

console.log(descriptor);


const chai = {  
  name: "amarjeet",
  loggedin: true,
  email: "amarjeetchoudhary647@gmail.com"
}

console.log(Object.getOwnPropertyDescriptor(chai, "email"));


// Object.defineProperty(Math, 'PI', {
//     writable: true,
//     enumerable: true,
//     configurable: true
// })
// console.log(Object.getOwnPropertyDescriptor(Math, 'PI'));
// 

// Object.defineProperty(math, "Math.pi", {
//     writable: true,
//     enumerable: true,
//     configurable: true
// })
// console.log(Object.getOwnPropertyDescriptor(math, "Math.PI"));


// ++++++++ this is how to change math.pi property
// const math = {
//     name: "manish",
//     class: Math.PI,
// }


const math = Math.PI = 5
Object.defineProperty(Math, 'PI', {
    enumerable: true, 
    writable: true,
    configurable: true
})
console.log(Object.getOwnPropertyDescriptor(Math, 'PI'));
