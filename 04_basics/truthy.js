const userEmail = "amarjeetchoudhary647@gmail.com"


// assume value basically those values that are assumed to be true or false
if (userEmail) {       
    console.log("executed");
}


//falsy values
// falsy, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}


// falsy values
// 0, false, -0, BigInt 0n, null, undefined, NaN, ""

// truthy values
// " ", "0", 'false', [], {}, function(){}


const myArray = []
if (myArray.length === 0) {
    console.log("amamr");
}

const obj1 = {}
if (Object.keys(obj1).length === 0) {
    console.log("executed");
}

if (function(){}) {
    console.log("true");
}

// nullish coalesching operator (??): used in null and undefined 
let val1;     
// val1 = 20 ?? 10      //it is a null safety operator
// val1 = null ?? 10
// val1 = undefined ?? 20
val1 = null ?? 10 ?? 20

console.log(val1);

// ternary operator
// operator ? true: false

// const iceCreamPrice = 400
// iceCreamPrice >= 500 ? console.log("tested") : console.log("tested2");

const price = 400
price <= 500 ? console.log("test1") : console.log("test2");