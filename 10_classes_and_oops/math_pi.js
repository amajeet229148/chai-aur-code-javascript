const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI')
Math.PI = 5

console.log(descriptor);

const chai = {
  name: 'chai',
  price: 34,
  isAvailable: true,
  
  myobj:function(){
    console.log(`thats ok`);
  }
}


Object.defineProperty(chai, 'price', {
  writable: false,
  enumerable: true
})
console.log(Object.getOwnPropertyDescriptor(chai, 'price'));

for (const [key, value] of Object.entries(chai)) {
  if (typeof value !== 'function') {
    console.log(`${key}, ${value}`);
  }
    
}
