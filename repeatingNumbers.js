const repeatNumbers = function (data) {
  let print = '';
  data.forEach(element => {
    for (let i = 0; i < element[1]; i++) {
      print += element[0];
    }
    print += ',';
  });
  //removing last comma
  return print.substr(0, print.length - 1);
};

console.log(repeatNumbers([
  [1, 10]
]));
console.log(repeatNumbers([
  [1, 2],
  [2, 3]
]));
console.log(repeatNumbers([
  [10, 4],
  [34, 6],
  [92, 2]
]));