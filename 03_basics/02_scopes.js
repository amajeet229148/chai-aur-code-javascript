//scopes starts with three keywords let var const
let a = 300
if(true){       //scopes are basically perenthesis{} and code doesnt have to go out of the perenthesis also we dont have to use var 
let a = 10
const b = 20 
// var c = 30       //dont have to use the var in scopes because the vae property can go outside the code
// console.log("inner: ", a);
}
// console.log(a);
// console.log(b);
// console.log(c);

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }
//scopes are different in node and in chrome or any browser


///+++++++nested scope

function one() {
    const username = "amarjeet"
    
    function two(){
        const course = "bca" 
        const age = 45
        console.log(username);
    }
    // console.log(course);
    // two()
}
one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = "youtube"
        // console.log(username + website);
    }
    // console.log(username); //cant be accessable
}
// console.log(username);   //cant be accessable


//+++++++++ interesting +++++++++++
function addOne(num) {
    return num + 1
}
// console.log(addOne(5))

numTwo(2)
const numTwo = function(num) {  // this function is called the expression it can't be execute before the program
    return num + 6
}
