// datatypes has 2 types primitive and non-primitive
// Based on the way data is stored in memory and how it is accessed, data has been divided into two categories.



// primitive datatpes => they are basically call by values
// 7 datatypes : String, Boolean, Number, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outSideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber = 868672173573523343n
console.log(typeof bigNumber);



//Refrence type => they are basically call by refrence (Non-primitive)
//Array, Object, Function

const heros = ["shaktiman", "batman", "naagraj"]
 let myObj = {
    name: "amarjeet",
    age: 23
 }
 
 const myFunction = function(){
    console.log("hello world");
 }
 console.log(typeof myFunction);
