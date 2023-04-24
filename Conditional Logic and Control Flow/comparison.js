// Greater than and less than with numbers
let val1 = (7 > 5);
console.log(`val1: ${val1}`);
let val2 = (5 <= 3);
console.log(`val2: ${val2}`);

// Equality
let val3 = (3 === 3);
console.log(`val3: ${val3}`);
let val4 = (true === false);
console.log(`val4: ${val4}`);
let val5 = ("Hi" !== "hi");
console.log(`val5: ${val5}`);

// Primitive equality (passed by value)
let str1 = "Hello";
let str2 = "Hello";
let val6 = (str1 === str2);
console.log(`val6: ${val6}`);

// Object equality (passed by reference)
let obj1 = {};
let obj2 = {};
let val7 = (obj1 === obj2);
console.log(`val7: ${val7}`);

let obj3 = obj2;
let val8 = (obj2 === obj3);
console.log(`val8: ${val8}`);


