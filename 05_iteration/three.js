// higher order function

//for of => its is array specific loop
// ["", ""] array with String
// [{}, {}, {}] array with Object 

const arr = [1, 2, 3, 4, 5, 6]

for (const num of arr) {
    // console.log(num);
}



// for of string loop printing
const greet = "heelo world"
for (const greeting of greet) {
    // console.log(`value of greet ${greeting}`);
}



// for of break condition
const greeting = "heelo world"
// for (const greet of greeting) {
    // console.log(`char of greet ${greet}`);
    if (greet == "w") {
        // console.log("number deducted");
        // break
    }
    




//map     => map has not duplicate value it has only unique keys
const map = new Map()

map.set('IN', "india")
map.set('USA', "united states of india")
map.set('FR', "france")
map.set('IN', "india")
// console.log(map);

for (const [key, value] of map) {   // for of loop with map
    // console.log(key, ':-', value);
}


const myObject = {
    'name': 'amarjeet',
    'gamename': 'bgmi'
}
//object are not appilicable for (for of loop)
for (const [keys, values] of myObject) {
    console.log(keys, ':-', values);
}