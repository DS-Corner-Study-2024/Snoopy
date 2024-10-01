// Repeating tasks 

let vacationSpots1 = ['one','two','three'];

console.log(vacationSpots1[0]);
console.log(vacationSpots1[1]);
console.log(vacationSpots1[2]);



// For loop 

for(let i=5; i<=10; i++){
    console.log(i); // 5 6 7 8 9 10
}

for (let counter = 3; counter >= 0; counter--){
    console.log(counter); // 3 2 1 0
}



// For loop & Array 

const vacationSpots2 = ['Bali', 'Paris', 'Tulum'];
for(let i=0; i<vacationSpots2.length; i++){
    console.log(`I would love to visit ${vacationSpots2[i]}`);
}
/* 
    I would love to visit Bali
    I would love to visit Paris
    I would love to visit Tulum
*/


// Nestes Loops

let bobsFollowers = ['friend1','friend2','friend3','friend4'];
let tinasFollowers = ['friend3','friend4','friend5'];
let mutualFollowers = [];

for(let i=0; i<bobsFollowers.length; i++){
    for (let j=0; j<tinasFollowers.length; j++){
        if (bobsFollowers[i]===tinasFollowers[j]){
            mutualFollowers.push(bobsFollowers[i]);
        }
    }
}

console.log(bobsFollowers);     // [ 'friend1', 'friend2', 'friend3', 'friend4' ]
console.log(tinasFollowers);    // [ 'friend3', 'friend4', 'friend5' ]
console.log(mutualFollowers);   // [ 'friend3', 'friend4' ]



// While loop 

const cards = ["diamond", "spade", "heart", "club"];
let currentCard;

while (currentCard !== "spade") {
    currentCard = cards[Math.floor(Math.random() * 4)];
    console.log(currentCard);
}



// do .. while loop 

let cupsOfSugarNeeded = 3;
let cupsAdded = 0;

do {
    cupsAdded++;
    console.log(cupsAdded); // 1 2 3
} while(cupsAdded < cupsOfSugarNeeded)



// break

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

for(let i=0; i<rapperArray.length; i++){
    console.log(rapperArray[i]);
    if (rapperArray[i]==="Notorious B.I.G."){
        break;
    }
}

console.log("And if you don't know, now you know.");
/*
    Lil' Kim
    Jay-Z
    Notorious B.I.G.
    And if you don't know, now you know.
*/