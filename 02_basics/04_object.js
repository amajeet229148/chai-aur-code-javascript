//const tinderUser = new Object()  //example of singleton object

const tinderUser = {}

tinderUser.id = "amkarjeet"
tinderUser.age = 23
tinderUser.email = "amarjeetchoudhary64@gmail.com"

// console.log(tinderUser);

const regularUser = {       //+++++++++we can declare object in object
    name: "amarjeet",
    fullname: {
        name: "amar",
        yourNewEmail: {
            email: "amarjeetchoudhary"
        }
    }
}
// console.log(regularUser.fullname.yourNewEmail);

const obj1 = { 1: "a", 2: "b"}
const obj2 = { 3: "d", 4: "h"}

// const obj3 = { obj1, obj2 }

// const obj3 = Object.assign({}, obj1, obj2 )
// console.log(obj3);

const obj3 = {...obj1, ...obj2} // spread o[perator is also used for combining the object in one array

// console.log(obj3);

const user = [               // it is array of object when it comes to database

]
//  console.log(Object.keys(tinderUser)); // gives the property like keys in array
//  console.log(Object.values(tinderUser));  //gives the values of keys in array
//  console.log(Object.entries(tinderUser)); //give the value and key in array

//  console.log(tinderUser.hasOwnProperty('email'));


 ///+++++++++++++++++destructuring it is used for both array and object

 const course = {
    name: "amamrjeet",
    course: "bca",
    courseInstructor: "hitesh"
 }

 //console.log(course.courseInstructor)               ////we have to avoid this context 

const {courseInstructor: instructor} = course   /// code destructor example
// console.log(courseInstructor);
console.log(instructor);


//api has two type array and object

// json example as a object
// {
//    " name": "bca",
// "price": "10000"

// }

//api in array
[
    {},
    {},
    {}
]