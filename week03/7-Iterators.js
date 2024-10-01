// Higer Order Functions 

// (1) functions as data

const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for(let i = 1; i <= 1000000; i++) {
        if ( (2 + 2) != 4) {
        console.log('Something has gone very wrong :( ');
        }
    }
};

const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes;

isTwoPlusTwo();

console.log(isTwoPlusTwo.name);    // checkThatTwoPlusTwoEqualsFourAMillionTimes


// (2) function as parameters

const addTwo = num => {
    return num + 2;
}

const checkConsistentOutput = (func, val) => {
    let checkA = val+2;
    let checkB = func(val);

    if (checkA===checkB){
        return checkA;
    } else {
        return 'inconsistent results';
    }
}

console.log(checkConsistentOutput(addTwo,3));   // 5



// Iterators

// (1) .forEach() method

// 방법 1
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];
fruits.forEach(
    function(fruitName){
    console.log(`I want to eat a ${fruitName}`);
});

//방법 2
fruits.forEach(
    fruitName => console.log(`I want to eat a ${fruitName}`));

// 방법 3
function printFruits(fruitName){
    console.log(`I want to eat a ${fruitName}`);
}

fruits.forEach(printFruits);

/*
I want to eat a mango
I want to eat a papaya
I want to eat a pineapple
I want to eat a apple
*/


// (2) .map() method

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];
const secretMessage = animals.map(animalName => {return animalName[0];});
console.log(secretMessage.join(''));    // HelloWorld

const bigNumbers = [100, 200, 300, 400, 500];
const smallNumbers = bigNumbers.map(bigNumber => {return bigNumber/100;});
console.log(smallNumbers);      // [ 1, 2, 3, 4, 5 ]


// (3) .filter() method

const randomNumbers = [375, 200, 3.14, 7, 13, 852];
const smallNumbers2 = randomNumbers.filter(number => {return number<250;});
console.log(smallNumbers2);     // [ 200, 3.14, 7, 13 ]

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];
const longFavoriteWords = favoriteWords.filter(
    word => {return word.length>7;});
console.log(longFavoriteWords);     // [ 'nostalgia', 'hyperbole', 'esoteric' ]


// (4) .findIndex() method 

const animals2 = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals2.findIndex(animal => {return animal==='elephant';});
console.log(foundAnimal);   // 7

const startsWithS = animals2.findIndex(animal => {return animal[0]==='s';});
console.log(startsWithS);   // 3


// (5) .reduce() method - 1

const newNumbers1 = [1, 3, 5, 7];

const newSum1 = newNumbers1.reduce(
    (accumulator, currentValue) => {
        console.log("The value of accumulator: ", accumulator);
        console.log("The value of currentValue: ", currentValue);
        return accumulator + currentValue;
    }
);

console.log(newSum1);

/*
The value of accumulator:  1 (첫번째 요소)    The value of currentValue:  3 (두번째 요소)
The value of accumulator:  4 (1 + 3)         The value of currentValue:  5 (세번째 요소)
The value of accumulator:  9 (4 + 5)         The value of currentValue:  7 (네번째 요소)
newSum : 16 
*/


// (5) .reduce() method - 2. 두 번째 매개 변수 

const newNumbers2 = [1, 3, 5, 7];

const newSum2 = newNumbers2.reduce((accumulator, currentValue) => {
    console.log("The value of accumulator: ", accumulator);
    console.log("The value of currentValue: ", currentValue);
    return accumulator + currentValue;
}, 10);

console.log(newSum2);

/*
The value of accumulator: 10 (두 번째 매개변수)     The value of currentValue:  1 (첫 번째 요소)
The value of accumulator: 11 (10 + 1)              The value of currentValue:  3 (두 번째 요소)
The value of accumulator: 14 (11 + 3)              The value of currentValue:  5 (세 번째 요소)
The value of accumulator: 19 (14 + 5)              The value of currentValue:  7 (네 번째 요소)
newSum : 26
*/



// Iterator Documentation

const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// (1) .some() 
console.log(words.some(word => word.length < 6));   // true

// (2) .filter()
const interestingWords = words.filter(word => word.length > 5);

// (3) .every()
console.log(interestingWords.every(word => word.length > 5));   // true 



// Choose the Right Iterator 

const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];
const nums = [1, 50, 75, 200, 350, 525, 1000];

// (1) .forEach() : 배열의 각 값에 대해 작업 수행 후 undefined 반환 
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// (2) .filter() : 7글자보다 긴 요소들만 담긴 새로운 배열 반환 
const longCities = cities.filter(city => city.length > 7);

// (3) .reduce() : 여러 값을 포함하는 배열을 받아들이고 단일 값을 반환
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");
console.log(word)   // CODECADEMY

// (4) .map() : 함수에서 반환된 새로운 배열 반환
const smallerNums = nums.map(num => num - 5);

// (5) .every(), .some() : boolean 값을 반환
nums.every(num => num < 0);
nums.some(num => num < 0);