const squareCode = function (message) {
  //removing spaces from array
  message = message.replace(new RegExp(' ', 'g'), '');
  nOfCol = Math.ceil(Math.sqrt(message.length));
  let output = '';
  let arr = [];
  let row = 0;
  //putting message into array
  for (let i = 0, k = 0; k < message.length; k += nOfCol, i++) {
    arr[i] = message.substring(row, row + nOfCol);
    row += nOfCol;
  }
  //adding zeros to get a perfect square for the for for loop below
  for (let i = 0; i < arr.length; i++) {
    while (arr[i].length < nOfCol)
      arr[i] += ' ';
  }
  //building the string
  for (let i = 0; i < nOfCol; i++) {
    for (let k = 0; k < arr.length; k++) {
      output += arr[k][i];
    }
    output += ' ';
  }
  return output;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));