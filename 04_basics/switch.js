//used to check the value by multiple condidtion
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "april"

switch (month) {
    case "january":
        console.log("test1");
        break;
    case "feburary":
        console.log("test2");
        break;
    case "march":
        console.log("test3");
        break; //if case break is not available then ity will not check condition
    case "april":
        console.log("test4");
        break;

    default:
        console.log("manish");  //executed when the switch statement are false
        break;
