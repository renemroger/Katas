
const urlEncode = function (text) {
  return text.replace(new RegExp(' ', 'g'), "%20");
};


console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));


