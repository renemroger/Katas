const organizeInstructors = function (instructors) {
  let listOfInstructors = {};
  //dynamically creating the object keys
  instructors.forEach(function (e) {
    if (!listOfInstructors.hasOwnProperty(e.course)) {
      listOfInstructors[e.course] = [];
    }
    //adding values to keys
    listOfInstructors[e.course].push(e.name);
  });
  return listOfInstructors;
};

console.log(organizeInstructors([{
  name: "Samuel",
  course: "iOS"
},
{
  name: "Victoria",
  course: "Web"
},
{
  name: "Karim",
  course: "Web"
},
{
  name: "Donald",
  course: "Web"
}
]));
console.log(organizeInstructors([{
  name: "Brendan",
  course: "Blockchain"
},
{
  name: "David",
  course: "Web"
},
{
  name: "Martha",
  course: "iOS"
},
{
  name: "Carlos",
  course: "Web"
}
]));