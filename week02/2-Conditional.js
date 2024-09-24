// If Statement 

let sale1 = true;

sale1 = false;

if (sale1) {
  console.log('Time to buy!');
}

// Output : 



// If … else statement  

let sale2 = true;

sale2= false;

if (sale2) {
  console.log("Time to buy!");
} else {
  console.log("Time to wait for a sale.");
}

// Output : Time to wait for a sale. 



// Comparison Operators (비교 연산자)

let hungerLevel = 7;

if (hungerLevel>7){
  console.log('Time to eat!');
}else{
  console.log('We can eat later!');
}

// Output : We can eat later! 



// Logical Operators (논리 연산자)

let mood = "sleepy";
let tirednessLevel = 6;

if (mood === "sleepy" && tirednessLevel > 8) {
  console.log("time to sleep");
} else {
  console.log("not bed time yet");
}

// Output : not bed time yet



// truty and falsy

let wordCount = 1;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
} 

// Output : Great! You've started your work! 

let favoritePhrase = '';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
} 

// Output : This string is definitely empty.

let tool = 'marker';
let writingUtensil = tool||'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`);

// Output : The marker is mightier than the sword.



// Ternary Operator 

/* 변환할 코드 
let isLocked = false;

if (isLocked) {
  console.log('You will need a key to open the door.');
} else {
  console.log('You will not need a key to open the door.');
}

let isCorrect = true;

if (isCorrect) {
  console.log('Correct!');
} else {
  console.log('Incorrect!');
}

let favoritePhrase = 'Love That!';

if (favoritePhrase === 'Love That!') {
  console.log('I love that!');
} else {
  console.log("I don't love that!");
}
*/

let isLocked = false;
isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');
// You will not need a key to open the door.

let isCorrect = true;
isCorrect ? console.log('Correct!') : console.log('Incorrect!');
// Correct!

let favoritePhrase2 = 'Love That!';
favoritePhrase2 === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");
// I love that!



// else if statement 

let season = "summer";

if (season === "spring") {
  console.log("It's spring! The trees are budding!");
} else if (season === "winter") {
  console.log("It's winter! Everything is covered in snow.");
} else if (season === "fall") {
  console.log("It's fall! Leaves are falling!");
} else if (season === "summer") {
  console.log("It's sunny and warm because it's summer!");
} else {
  console.log("Invalid season.");
}

// It's sunny and warm because it's summer!



// switch

let athleteFinalPosition = "first place";

switch (athleteFinalPosition) {
  case "first place":
    console.log("You get the gold medal!");
    break;
  case "second place":
    console.log("You get the silver medal!");
    break;
  case "third place":
    console.log("You get the bronze medal!");
    break;
  default:
    console.log("No medal awarded.");
    break;
}

// You get the gold medal!



// Practice : Magic Eight Ball 

// 1) switch

let userName1 = "inyeong";
userName1 ? console.log(`Hello, ${userName1}!`) : console.log("Hello!");

let userQuestion1 = "Will the weather be good today?";
console.log(userQuestion1);

let randomNumber1 = Math.floor(Math.random(0,8));
let eightBall1 = "";

switch (randomNumber1){
  case 0:
    eightBall1 = 'It is certain';
    break;
  case 1:
    eightBall1 = 'It is decidedly so';
    break;
  case 2:
    eightBall1 = 'Reply hazy try again';
    break;
  case 3:
    eightBall1 = 'Cannot predict now';
    break;
  case 4:
    eightBall1 = 'Do not count on it';
    break;
  case 5:
    eightBall1 = 'My sources say no';
    break;
  case 6:
    eightBall1 = 'Outlook not so good';
    break;
  case 7:
    eightBall1 = 'Signs point to yes';
    break;
}

console.log(eightBall1);

// (2) else if

let userName2 = "inyeong";
userName2 ? console.log(`Hello, ${userName2}!`) : console.log("Hello!");

let userQuestion2 = "Will the weather be good today?";
console.log(userQuestion2);

let randomNumber2 = Math.floor(Math.random(0,8));
let eightBall2 = "";

if (randomNumber2 == 0){
  eightBall2 = 'It is certain';
} else if (randomNumber2 == 1){
  eightBall2 = 'It is decidedly so';
} else if (randomNumber2 == 2){
  eightBall2 = 'Reply hazy try again';;
} else if (randomNumber2 == 3){
  eightBall2 = 'Cannot predict now';
} else if (randomNumber2 == 4){
  eightBall2 = 'Do not count on it';
} else if (randomNumber2 == 5){
  eightBall = 'My sources say no';
} else if (randomNumber2 == 6){
  eightBall2 = 'Outlook not so good';
} else{
  eightBall2 = 'Signs point to yes';
}

console.log(eightBall2);



// Pratice : Race Day 

let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = true;
const age = 22;

if (age>18 && registeredEarly){
  raceNumber += 1000;
}

if (age>18 && registeredEarly){
  console.log(`Early Adults (${raceNumber}) run at 9:30 am.`);
} else if (age>18 && !registeredEarly){
  console.log(`Late Adults (${raceNumber}) run at 11:00 am.`);
} else if (age < 18){
  console.log(`Youth registrants (${raceNumber}) run at 12:30 pm.`);
} else{
  console.log("See the registration desk.");
}
