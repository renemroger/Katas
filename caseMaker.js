const camelCase = function (input) {
  let words = input.split(' ');
  for (let i = 1; i <= words.length - 1; i++) {
    words[i] = words[i].replace(words[i][0], words[i][0].toUpperCase());
  }
  return words.join('');
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));