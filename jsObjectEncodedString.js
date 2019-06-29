const urlDecode = function (text) {
  let decoded = {};
  text = text.replace(new RegExp('%20', 'g'), ' ');
  var stringToDecode = text.split('&');
  stringToDecode.forEach(e => {
    let keyValuePair = e.split('=');
    for (let i = 0; i < keyValuePair.length; i += 2) {
      decoded[keyValuePair[0]] = keyValuePair[1];
    }
  })

  return decoded;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
