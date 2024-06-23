// immediately involked function expression (iife)

// used to execute function immediately and also used for we write code for database file and we want As soon as the app starts, the connection to the database in the file of that app starts.
 
// sometimes we got problem from the global scope variable which are polluted it is used to remove the pollute from the gobal scope


//+++ example of (iife)
(function chai() {
    //Named IIFE
    console.log(`db connection`);
})();          //semicolumn must be imortant to end the code execution


( (name) => {
    // Simple IIFE
    console.log(`db connected two ${name}`);
} )('amarjeet');