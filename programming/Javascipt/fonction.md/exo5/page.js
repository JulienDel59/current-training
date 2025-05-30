const numbers = [1,2,2,3,4,2,5,2];
let element = 2;




function countOccurrences(numbers, element) {
  return numbers.filter(item => item === element).length;
}

console.log(countOccurrences(numbers,element));