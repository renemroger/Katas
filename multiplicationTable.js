const multiplicationTable = function (maxValue) {
  let table = '';
  for (let i = 1; i <= maxValue; i++) {
    for (let z = i; z <= maxValue * i; z += i) {
      table += z + ' ';
    }
    table += '\n';
  }
  return table;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));