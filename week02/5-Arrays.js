// Create an Array (배열 생성)

const hobbies = ['book','music','exercise'];
console.log(hobbies);
// output : [ 'book', 'music', 'exercise' ]



// Accessing Elements (배열 요소 접근)

const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];
const listItem = famousSayings[0];

console.log(listItem);          // Fortune favors the brave.
console.log(famousSayings[2]);  // Where there is love there is life.
console.log(famousSayings[3]);  // undefined 



// Update Elements (배열 요소 수정)

let groceryList = ['bread', 'tomatoes', 'milk'];

groceryList[1] = 'avocados';
console.log(groceryList);   
// output : [ 'bread', 'avocados', 'milk' ] 



// Arrays with let and const 

let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];
const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';
console.log(condiments);  // [ 'Mayo', 'Mustard', 'Soy Sauce', 'Sriracha' ]

condiments = ['Mayo'];
console.log(condiments);  // [ 'Mayo' ]

utensils[3] = 'Spoon';
console.log(utensils);    // [ 'Fork', 'Knife', 'Chopsticks', 'Spoon' ]



// property - .length

const objectives = ['Learn a new language', 'Read 52 books', 'Run a marathon'];

console.log(objectives.length); // 3



// Method 

// (1) .push()

const chores1 = ['wash dishes', 'do laundry', 'take out trash'];

chores1.push('clean','wash');
console.log(chores1); // [ 'wash dishes', 'do laundry', 'take out trash', 'clean', 'wash' ] 

// (2) .pop()

const chores2 = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];

chores2.pop();
console.log(chores2); // [ 'wash dishes', 'do laundry', 'take out trash', 'cook dinner' ] 

// (3) .shift(), .unshift(), .slice(), .indexOf() 

const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();
console.log(groceryList); // [ 'bananas','coffee beans','brown rice','pasta','coconut oil','plantains' ]

groceryList.unshift('popcorn');
console.log(groceryList); // [ 'popcorn','bananas','coffee beans','brown rice','pasta','coconut oil','plantains' ]

console.log(groceryList.slice(1,4));
console.log(groceryList); // [ 'bananas', 'coffee beans', 'brown rice' ]

const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);  // [ 'popcorn','bananas','coffee beans','brown rice','pasta','coconut oil','plantains' ]



// Arrays and Functions 

const concept = ["arrays", "can", "be", "mutated"];

function changeArr(arr) {
  arr[3] = "MUTATED";
}
changeArr(concept);
console.log(concept); // [ 'arrays', 'can', 'be', 'MUTATED' ]

function removeElement(newArr) {
  newArr.pop();
}
removeElement(concept);
console.log(concept); // [ 'arrays', 'can', 'be' ]



// Nested Arrays (중첩 배열)

const numberClusters = [[1,2],[3,4],[5,6]];
const target = numberClusters[2][1];
console.log(target); // 6 