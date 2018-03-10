"use strict";

const testArray = [1, 2, 3, 4];
// console.log(testArray[0]);

for (let i = 0; i <= testArray.length; i++) {
// console.log(i);
}

let j = 0;
while (j < testArray.length) {
// console.log(testArray[j]);
j++ 

}

let newArray = []
testArray.forEach(function(element) {
const result = element + 1;
newArray.push(result)
console.log(result);
}); 

console.log(newArray);