// if :


const userIsLoggedIn = true
const temprature = 41

// if(temprature < 32) {     //runs when the given condition is true
//    console.log("executed");
// } else{                    // runs when the given condition is false
//    console.log("ankit");
// }
// console.log("amar");

const score = 200

// if(score > 100){
//    const power = "fly"
//    console.log(`user power: ${power}`);
// }


//shorthand notation in if else
const balance = 1000

// if(balance > 500) console.log("amar"), console.log("piyush");  //implicit scope method used to write in one line
 
// if(balance < 500) {
//    console.log("test1");
// }else if(balance < 600) {
//    console.log("test case 2");
// }else if (balance < 800) {
//    console.log("test3");
// }else if (balance < 900) {
//    console.log(balance < 1000);
// }else{
//    console.log("less than 1200");
// }

const debitCard = true
const loggedIn = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (debitCard && loggedIn && 2 < 2) {   //used for every statement true with && operator
    console.log("amar");
}

if (loggedInFromGoogle || loggedInFromEmail) {   //uses for any case is true
    console.log("amarjeet");
}
