// loop condition
// for 

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element === 5){
        // console.log("5 is best number");
    }
    // console.log(element);
    
}


for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop ${i}`);
    for (let j = 1; j <= 10; j++) {

        //console.log(`inner loop ${j} and inner loop ${i}`);
        // console.log(i + '*' + j + '=' + i*j );
    
    }    
}


let myarray = ["flash", "iron man", "spiderman", "hulk"]
for (let i = 0; i < myarray.length; i++) {
    const element = myarray[i];
    // console.log(element);
}

// break and continue

for (let i = 0; i < 10; i++) {
    if(i == 5){
        console.log("number 5 deducted");
        continue
    }
    const element = i;
    console.log(element);
    
}