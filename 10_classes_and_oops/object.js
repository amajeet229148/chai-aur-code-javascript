function multipleBy5(num){
    return num*5
}
multipleBy5.power = 2

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createuser(username, score){
    this.username = username;
    this.score = score;
}

createuser.prototype.increment = function(){
    this.score++;
}
createuser.prototype.printMe = function(){
    console.log(`this is my ${this.score}`);
}

const user1 = new createuser("manish", 67);
const user3 = new createuser("amarjeet", 89);

console.log(user1);
console.log(user3);
user3.printMe()


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

function flatten(array, result) {
    if (array.length === 0) {
      return result
    }
    var head = array[0]
    var rest = array.slice(1)
    if (Array.isArray(head)) {
      return flatten(head.concat(rest), result)
    }
    result.push(head)
    return flatten(rest, result)
  }
  
  console.log(flatten([], []))
  console.log(flatten([1], []))
  console.log(flatten([1,2,3], []))
  console.log(flatten([1,2,[3,4]], []))
  console.log(flatten([1,2,[3,[4,5,6]]], []))
  console.log(flatten([[1,2,3],[4,5,6]], []))
  console.log(flatten([[1,2,3],[[4,5],6,7]], []))
  console.log(flatten([[1,2,3],[[4,5],6,[7,8,9]]], []))