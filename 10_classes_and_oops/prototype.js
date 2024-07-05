// let myName = "Amarjeet"

// console.log(myName.trueLength);

const myHeros = ["superman", "batman"];

const herosPower = {
    thor: "hammer",
    spiderman: "slinger",

    getspiderpower: function(){
        console.log(`sling is power of ${this.spiderman}`);
    }
}
Object.prototype.amarjeet = function(){  //object are accesable in string array anywhere because where thing goes thorugh object
    console.log(`my name is amarjeet`);
}
// herosPower.amarjeet()
// myHeros.amarjeet()

Array.prototype.manish = function(){ //only accesable in array
    console.log("are you amarjeet");
}
// myHeros.manish()

const user1 = {
  name: "manish",
  email: "amarjeetchoudhary647@gmail.com"
}

const teacher = {
    makeVideo: true
}

const teachersupprot = {
    available: false
}
const taSupport = {
    available: true,
}
Object.setPrototypeOf(teacher, taSupport)

console.log(teacher);







const user = "manish    "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`the true length of string: ${this.trim().length}`);
}

user.trueLength()
"amarjeet choudhary".trueLength()
"tannu choudhary   ".trueLength()