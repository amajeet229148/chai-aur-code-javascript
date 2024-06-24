let i = 2
while (i <= 30) {
    // console.log(`the value of index is ${i}`);
    i = i + 2
}
//while loop array

let myArray = ["naagraj", "manish", "amar"]

let arr = 0
while (arr < myArray.length) {
    console.log(`value of array is ${myArray[arr]}`);
    arr = arr + 1
}

//do while runs the code first then checks the condition
let score = 22
do {
    console.log(`value of score is ${score}`);
    score++
} while (score <= 10);