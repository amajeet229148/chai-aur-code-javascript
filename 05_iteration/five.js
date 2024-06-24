const program = ["js", "ruby", "python", "java"]

// program.forEach(function (item) {
//     console.log(item);
// })

program.forEach((item, index, arr) => {
    console.log(item, index, arr);
});

const myprogram = [
    {
    programName: "javascript",
    fileName: "js"
},
{
    programName: "ruby",
    fileName: "rb"
},
{
    programName: "swift",
    fileName: "sf"
},
{
    programName: "python",
    fileName: "py"
}
]

myprogram.forEach((item) => {
    console.log(item.programName);
})