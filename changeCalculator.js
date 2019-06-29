const calculateChange = function (total, cash) {

  var change = cash - total;
  let formattedDeno = '';

  var denominations = {
    twentyDollar: calculateNewChange(change, 2000),
    tenDollar: calculateNewChange(change, 1000),
    fiveDollar: calculateNewChange(change, 500),
    twoDollar: calculateNewChange(change, 200),
    oneDollar: calculateNewChange(change, 100),
    quarter: calculateNewChange(change, 25),
    dime: calculateNewChange(change, 10),
    nickel: calculateNewChange(change, 5),
    penny: calculateNewChange(change, 1)
  };



  function calculateNewChange(n, value) {
    //calculate how many of coins to return
    let deno = Math.floor(n / value);
    //update change based on returned coins
    change -= (deno * value)
    return deno;
  }

  //using delete to remove extra properties
  for (let p in denominations) {
    if (denominations[p] === 0) {
      delete denominations[p];
    }
  }

  //extra
  //copying object and removing extra properties
  const newDeno = Object.keys(denominations).reduce((object, key) => {
    if (key !== 0) {
      object[key] = denominations[key];
    }
    return object;
  }, {});

  return denominations;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));