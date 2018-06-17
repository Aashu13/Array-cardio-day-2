const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 }
];
const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 }
];

// some and every checks
// Array.prototype.some

var isAdult = people.some(person => {
  console.log(
    new Date().getFullYear() - person.year >= 19
      ? person.name + " " + person.year
      : false
  );
});

console.log(isAdult);

// Array.prototype.every();
var allAdult = people.every(person => {
  console.log(
    new Date().getFullYear() - person.year >= 19
      ? person.name + " " + person.year
      : false
  );
});

console.table(allAdult);

// Array.prototype.find();
// find is like filter  but instead just you are looking for
// find the commet with the id of 2039842

// var comment = comments.find(function(commentId) {
//   if (commentId.id === 2039842) {
//     return true;
//   }
// });

console.log(comment);

var comment = comments.find(comment => comment.id === 2039842);
console.log(comment);
var index = comments.findIndex(comment => comment.id === 2039842);
comments.splice(index, 1);
