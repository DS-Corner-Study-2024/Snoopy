// Block and Scope 

const city = 'New York City';
function logCitySkyline(){
  let skyscraper = 'Empire State Building';
  return 'The stars over the '+skyscraper+' in '+city;
}
console.log(logCitySkyline());
// Output : The stars over the Empire State Building in New York City 



// Global Scope 

const satellite1 = 'The Moon';
const galaxy1 = 'The Milky Way';
const stars1 = 'North Star';

function callMyNightSky(){
  return 'Night Sky: '+ satellite1 + ', ' + stars1 + ', and ' + galaxy1;
}

console.log(callMyNightSky());
// Output : Night Sky: The Moon, North Star, and The Milky Way 



// Block Scope 

function logVisibleLightWaves(){
  const lightWaves1 = 'Moonlight';
  console.log(lightWaves1);
};

logVisibleLightWaves();
console.log(lightWaves1); // error 



// Scope Pollution

const satellite2 = 'The Moon';
const galaxy2 = 'The Milky Way';
let stars2 = 'North Star';

const callMyNightSky = () => {
  stars2='Sirius';
	return 'Night Sky: ' + satellite2 + ', ' + stars2 + ', ' + galaxy2;
};

console.log(callMyNightSky());  // Night Sky: The Moon, Sirius, The Milky Way
console.log(stars2);            // Sirius



// Practice Good Scoping 

const logVisibleLightWaves = () => {
  let lightWaves2 = 'Moonlight';
	let region = 'The Arctic';
  if (region==='The Arctic'){
    let lightWaves2 = 'Northern Lights';
    console.log(lightWaves2);
  }
};

logVisibleLightWaves(); // Northern Lights 