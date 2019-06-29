const conditionalSum = function (values, condition) {
  let n = 0;
  if (condition === "even") {
    return values.filter(value => value % 2 === 0).reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
  } else if (condition === "odd") {
    return values.filter(value => value % 2 !== 0).reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
  } else
    return 'unknown condition';
};