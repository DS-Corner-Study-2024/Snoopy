// Function Declarations (함수 선언) 

function getReminder(){
  console.log('Water the plants.');
}

function greetInSpanish(){
  console.log('Buenas tardes.')
}

getReminder();    // Output : Water the plants. 
greetInSpanish(); // Output : Buenas tardes. 



// Calling a Function (함수 호출) 

function sayThanks() {
  console.log("Thank you for your purchase! We appreciate your business.");
}

sayThanks(); // Output : Thank you for your purchase! We appreciate your business.



// Parameters and Arguments (매개변수와 인자)

function sayThanks(name) {
  console.log(
    "Thank you for your purchase " + name + "! We appreciate your business."
  );
}

sayThanks("Cole"); // Output : Thank you for your purchase Cole! We appreciate your business. 



// Default Parameters

function makeShoppingList(item1='milk', item2='bread', item3='eggs'){
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}

makeShoppingList(); 

/*
Output:
Remember to buy milk
Remember to buy bread
Remember to buy eggs
*/



// Return 

function monitorCount(rows, columns) {
  return rows*columns;
}

const numOfMonitors = monitorCount(5,4);
console.log(numOfMonitors); // Output : 20 



// Helper Functions
function monitorCount(rows, columns) {
  return rows * columns;
}

function costOfMonitors(rows, columns) {
  return monitorCount(rows, columns) * 200;
}

const totalCost = costOfMonitors(5,4);
console.log(totalCost); // Output : 4000 



// Function Expressions 

const plantNeedsWater1 = function (day) {
  if (day === "Wednesday") {
    return true;
  } else {
    return false;
  }
};

console.log(plantNeedsWater1('Tuesday')); // false 



// Arrow Functions 

const plantNeedsWater2 = (day) => {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};



// Concise Body Arrow Functions  

const plantNeedsWater3 = day => day === 'Wednesday' ? true : false;