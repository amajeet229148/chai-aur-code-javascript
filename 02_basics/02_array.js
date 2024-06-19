const heros = ["shaktiman", "superman", "naagraj"]
const dc_heros = ["spiderman", "chaddiman", "ironman"]

// heros.push(dc_heros)

// console.log(heros);
// console.log(heros[3][1]);

// heros.concat(dc_heros)
// console.log(heros);


// const allHeros = heros.concat(dc_heros)    //used for connect array in one array
// console.log(allHeros);

// const all_MY_Heros = [...dc_heros, ...heros] // works same as the concat it make every element individual most of the time we prefer to use it we can say it spread operator
// console.log(all_MY_Heros);

const real_Array = [1, 2, 3, 4, 5, 6, [7, 8, [9, 10, [11, 12]]]]
// real_Another_array = real_Array.flat(Infinity)

// console.log(real_Another_array);

console.log(Array.isArray("hitesh"));
console.log(Array.from("hitesh")); // converts everything in array
console.log(Array.from({name : "hitesh"})); // which value it cant coverts then it give you emtpy

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of (score1, score2, score3));