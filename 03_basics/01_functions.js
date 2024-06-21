// function are basically package of block that we can use as a copy any place

function sayMyName () {
    console.log("A");
    console.log("M");
    console.log("A");
    console.log("A");
    console.log("R");
    console.log("J");
    console.log("E");
    console.log("E");
    console.log("T");
}
// sayMyName is a function and perentehesis () is execution

// sayMyName()


/// when we take number in function it is called (paramter) but when we take the value in calling value then it is called (arguments)

// function addTwoNumbers(number1, number2) {            //the value take in function is called para
//     console.log(number1 + number2);
// }
// const result = addTwoNumbers(3, 4)  // the passed value in calling function is called argument


function addTwoNumbers(number1, number2) {            //the value take in function is called para
    let result = number1 + number2
    return result
}
const result = addTwoNumbers(3, 4)
// console.log("result:", result);


function loginUserMessage(username = "sam") {
    if(username === undefined){  // it is used for true condition we can use (!) symbol exclamatory that change true to false false to true 
        
        console.log("please enter a number");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage('HITESH'));
// console.log(loginUserMessage("hitesh"));


function calculateTheCart(val1, val2, ...num1) {  //val1 and 2 saves the first and second value and num other rest value because of rest operator
    return num1
}
// console.log(calculateTheCart(400, 200, 300, 500));

const user = {
    username: "amarjeet",
    price: 1000
}

function handleAnyObject(anyObject) {
    console.log(`user name is ${anyObject.username} and the price is ${anyObject.price}`);
}
handleAnyObject({
    username: "sam",
    price: 299
})

const myNewArray = [100, 200, 300, 400]

function returnMySecondValue(getArray) {
    return getArray[2]
} 
// console.log(returnMySecondValue(myNewArray));
console.log(returnMySecondValue([100, 200, 300, 400]));