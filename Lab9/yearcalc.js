var insertAge = prompt("What is your age: ");
var age = Number(insertAge);

var todayDate = new Date().getFullYear();


var birthYear = todayDate - age;


document.write("Your birth year is: " + birthYear);
