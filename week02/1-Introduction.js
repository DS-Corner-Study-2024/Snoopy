// Practice 1

let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;

levelUp += 5;
powerLevel -= 100;
multiplyMe *= 11;
quarterMe /= 4;

console.log('The value of levelUp:', levelUp); 
console.log('The value of powerLevel:', powerLevel); 
console.log('The value of multiplyMe:', multiplyMe); 
console.log('The value of quarterMe:', quarterMe);

/* 
[Output]
The value of levelUp: 15
The value of powerLevel: 8901
The value of multiplyMe: 352
The value of quarterMe: 288
*/



// Practice 2 

let gainedDollar = 3;
let lostDollar = 50;
gainedDollar++;
lostDollar++;
console.log(gainedDollar); 	// Output : 4
console.log(lostDollar); 	// Output : 49 



// Practice 3 : Kelvin -> Celcius -> Fahrenheit, Newton scale

const kelvin = 293;

// convert Kelvin to Celsius
const celsius = kelvin - 273;

// calculate Fahrenheit
let fahrenheit = celsius * (9/5) + 32;
// round down
fahrenheit = Math.floor(fahrenheit);

// convert Celsius to the Newton scale
let newton = celsius * (33/100);
// round down
newton = Math.floor(newton);

console.log(`The tempearture is ${fahrenheit} degrees Fahrenheit.`);
console.log(`The tempearture is ${newton} degrees Newton.`);



// Practice 4 : human age -> dog age 

const myAge = 22; 

let earlyYears = 2;
// multiply earlyYears by 10.5
earlyYears *= 10.5;

// subtract already accounted 2 years 
let laterYears = myAge - 2;
// multiply laterYears by 4 
laterYears *= 4;

// my age in dog years 
let myAgeInDogyears = earlyYears + laterYears;

const myName = 'Inyeong'.toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} old in human years which is ${myAgeInDogyears} years old in dog years.`);
