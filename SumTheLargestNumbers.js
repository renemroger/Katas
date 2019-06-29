const sumLargestNumbers = function (data) {
  data.sort();
  if (data.length >= 2)
    return data[data.length - 1] + data[data.length - 2];
  else if (data.length === 1)
    return data[0];
  else
    return 'the array is empty';
};