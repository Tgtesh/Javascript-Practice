// CHALLENGE 1
// Prompt the user for their first name
// Store their input to a variable
// Reverse your user’s name
// alert the reversed string
let fName=prompt("please enter your first name");
let reversed= fName.split("").reverse().join("");
alert(reversed);

// Challenge 2
// Prompt for a number value (provide a default of 10)
// Prompt for a second number value (provide a default of 10)
// Convert the prompted values into integers using parseInt()
// Add the numbers together and alert the user with the result
let number=prompt("Enter a number", "10");
let number2=prompt("Enter another number", "10");
let nm=parseInt(number);
let nm2=parseInt(number2);
let sum=nm+nm2;
alert(`the total is: ${sum}`)
