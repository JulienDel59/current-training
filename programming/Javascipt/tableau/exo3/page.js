const fruits = ['Apple', 'Banana', 'Apple', 'Orange', 'Banana', 'Apple'];

function removeDuplicates(fruits) {
     return [...new Set (fruits)];
}


 console.log(removeDuplicates(fruits));







