const makeCase = function (input, caseType) {
  let string = input;
  let type = caseType;
  let multipleCaseType = false;
  let caseTypeDepth = 1; //default case

  //when we receive a array
  if (typeof (caseType) != "string") {
    caseTypeDepth = caseType.length;
    type = caseType[caseTypeDepth];
  }
  //for array loop
  while (caseTypeDepth >= 0) {
    switch (type) {
      case "camel":
        string = camelCase(string);
        break;
      case "pascal":
        string = pascalCase(string);
        break;
      case "snake":
        string = string.split(' ').join('_');
        break;
      case "kebab":
        string = string.split(' ').join('-');
        break;
      case "title":
        string = titleCase(string);
        break;
      case "vowel":
        string = vowelsCase(string);
        break;
      case "consonant":
        string = consonantCase(string);
        break;
      case "upper":
        string = upper(string);
        break;
      case "lower":
        string = lower(string);
        break;
    }
    caseTypeDepth--;
    type = caseType[caseTypeDepth];

  }
  return string;
}


const camelCase = function (input) {
  let words = input.split(' ');
  for (let i = 1; i <= words.length - 1; i++) {
    words[i] = words[i].replace(words[i][0], words[i][0].toUpperCase());
  }
  return words.join('');
};

const pascalCase = function (input) {
  let words = input.split(' ');
  for (let i = 0; i <= words.length - 1; i++) {
    words[i] = words[i].replace(words[i][0], words[i][0].toUpperCase());
  }
  return words.join('');
};

const titleCase = function (input) {
  let words = input.split(' ');
  for (let i = 0; i <= words.length - 1; i++) {
    words[i] = words[i].replace(words[i][0], words[i][0].toUpperCase());
  }
  return words.join(' ');
};

const vowelsCase = function (input) {
  let l = input.split('');
  for (let i = 0; i <= l.length - 1; i++) {
    if (l[i] === 'a' || l[i] === 'e' || l[i] === 'i' || l[i] === 'o' || l[i] === 'u') {
      l[i] = l[i].replace(l[i][0], l[i][0].toUpperCase());
    }
  }
  return l.join('');
};

const consonantCase = function (input) {
  let l = input.split('');
  for (let i = 0; i <= l.length - 1; i++) {
    if (!(l[i] === 'a' || l[i] === 'e' || l[i] === 'i' || l[i] === 'o' || l[i] === 'u')) {
      l[i] = l[i].replace(l[i][0], l[i][0].toUpperCase());
    }
  }
  return l.join('');
};

const upper = function (input) {
  let l = input.split('');
  for (let i = 0; i <= l.length - 1; i++) {
    l[i] = l[i].replace(l[i][0], l[i][0].toUpperCase());

  }
  return l.join('');
};

const lower = function (input) {
  let l = input.split('');
  for (let i = 0; i <= l.length - 1; i++) {
    l[i] = l[i].replace(l[i][0], l[i][0].toLowerCase());
  }
  return l.join('');
};



console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));