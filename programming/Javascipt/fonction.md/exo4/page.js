const numbers = [1,2,3,4,5]
let value = 1;



function containsElement (numbers,value) {
    return numbers.includes(value);
}

console.log(containsElement(numbers,value));


// ::::::::::


 function containsElement(numbers, value) {
 for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === value) {
     return true;
   }
 }
    return false;
 }

console.log(containsElement(numbers,value));


