const table = [1,2,3];
const table2 = [4,5,6];

function mergeArrays(tab1, tab2) {
  return [...tab1, ...tab2];
}

console.log(mergeArrays(table, table2));



