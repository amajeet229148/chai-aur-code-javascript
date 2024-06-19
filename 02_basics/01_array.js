//Arrays

const myArr = [0, 1, 2 , 3, 4, 5,]  // array are resizable
const myHeros = ["shaktman", "naagraj"]
console.log(myArr[0]);

// const myArr2 = new Array(1, 2, 3, 4)
// console.log([1]);

//Array methods

//  myArr.push(6)
// myArr.pop() // uses for removing  the last value

// myArr.unshift(8) // adds the value in atrating
// myArr.shift()
//  console.log(myArr.includes());
//  console.log(myArr.indexOf(9));


// const newArr = myArr.join() // used to join arrays
// console.log(newArr); // converts arrray type into string type
// console.log(myArr);
// console.log(typeof newArr);

//slice, splice


console.log("A", myArr);

const myn1 = myArr.slice(1, 3) //remove the last value 3 and print 1 and 2
console.log(myArr);
console.log(myn1)
console.log("B", myArr);

const myn2 = myArr.splice(1, 3) // remove the other arrray from original array value and gives out of our range od original array
console.log("C", myn2);
console.log(myArr);