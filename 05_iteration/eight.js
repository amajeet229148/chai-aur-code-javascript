const myNums = [1, 2, 3, 4, 5, 6, 7, 8]

// const total = myNums.reduce(function(acc, cuurval){
//     console.log(`acc: ${acc} and the value of currval: ${cuurval}`);
//     return acc + cuurval
// }, 0)


// arrow function

const total = myNums.reduce((accu, current) => accu + current, 0)
console.log(total);

const shoppingCart = [{
    itemName: "js course",
    price: 4553
},
{
    itemName: "ruby course",
    price: 5345
},
{
    itemName: "python course",
    price: 3545
},
{
    itemName: "java course",
    price: 4554
},
{
    itemName: "html course",
    price: 3456
}]
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay);