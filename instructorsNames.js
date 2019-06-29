const instructorWithLongestName = function (instructors) {
  //setting the longest to be the last name.
  //we will traverse from end to begin.
  let longestName = instructors[instructors.length - 1];
  for (let i = instructors.length - 1; i > 0; i--) {
    if (longestName.name.length <= instructors[i - 1].name.length) {
      longestName = instructors[i - 1];
    }
  }
  return longestName;
};