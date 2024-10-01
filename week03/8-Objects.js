// Creating Object literals

let fasterShip = {
    'Fuel Type' : 'Turbo Fuel',
    color : 'silver'
};



// Accessing Properties (1) dot natation . 

let spaceship = {
    homePlanet: 'Earth',
    color: 'silver',
    'Fuel Type': 'Turbo Fuel',
    numCrew: 5,
    flightPath: ['Venus', 'Mars', 'Saturn']
};

let crewCount = spaceship.numCrew;
let planetArray = spaceship.flightPath;

console.log(crewCount);     // 5
console.log(planetArray);   // [ 'Venus', 'Mars', 'Saturn' ]



// Accessing Properties (2) bracket natation [] 

let spaceship2 = {
    'Fuel Type' : 'Turbo Fuel',
    'Active Mission' : true,
    homePlanet : 'Earth', 
    numCrew: 5 
    };

let propName =  'Active Mission';  
let isActive = spaceship2['Active Mission'];

console.log(isActive);              // true 
console.log(spaceship2[propName]);  // true



// Property Assignment 

let spaceship3 = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth',
    color: 'silver',
    'Secret Mission' : 'Discover life outside of Earth.'
};

spaceship.color = 'glorious gold';
spaceship.numEngines = 1;
delete spaceship['Secret Mission'];
// delete spaceship.'Secret Mission'; (X)

console.log(spaceship);

/*
{ 'Fuel Type': 'Turbo Fuel',
    homePlanet: 'Earth',
    color: 'glorious gold',
    numEngines: 1 }
*/



// Methods 

let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// 방법 1
/*
let alienShip = {
    retreat : function() {console.log(retreatMessage);},
    takeOff : function() {console.log('Spim... Borp... Glix... Blastoff!');}
};
*/

// 방법 2 - :(콜론), function 키워드 생략 가능 
let alienShip = {
    retreat() {console.log(retreatMessage);}, 
    takeOff() {console.log('Spim... Borp... Glix... Blastoff!');}   // ; 생략 가능 
};

alienShip.retreat();    // 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.'
alienShip.takeOff();    // 'Spim... Borp... Glix... Blastoff!'



// Nested Objects 

let spaceship = {
    passengers: null,

    telescope: {
        yearBuilt: 2018,
        model: "91031-XLT",
        focalLength: 2032 
    },

    crew: {
        captain: { 
        name: 'Sandra', 
        degree: 'Computer Engineering', 
        encourageTeam() { console.log('We got this!') },
        'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
    },

    engine: {
        model: "Nimbus2000"
    },

    nanoelectronics: {
        computer: {
        terabytes: 100,
        monitors: "HD"
        },
    'back-up': {
        battery: "Lithium",
        terabytes: 50
        }
    }
}; 

let capFave = spaceship.crew.captain['favorite foods'][0];
spaceship.passengers = [{name:'Space Dog'}, {name: 'Space Cat'}];

let firstPassenger = spaceship.passengers[0];



// Pass by Reference

let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth'
};

let greenEnergy = object => {
    object['Fuel Type'] = 'avocado oil';
}

let remotelyDisable = object => {
    object.disabled = true;
}

greenEnergy(spaceship);
remotelyDisable(spaceship);

console.log(spaceship);

/*
{ 'Fuel Type': 'avocado oil',
    homePlanet: 'Earth',
    disabled: true }
*/



// Looping Through Objects 

let spaceship = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 

/*
crewMember는 문자열이라 이렇게 할 수 없음 
for (let crewMember in spaceship.crew) {
    console.log(`[${crewMember}]:[${crewMember.name}]`);
}
*/

for (let crewMember in spaceship.crew) {
    console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`);
}
/*
captain: Lily
chief officer: Dan
medic: Clementine
translator: Shauna
*/

for (let crewMember in spaceship.crew) {
    console.log(`${spaceship.crew[crewMember].name}: ${spaceship.crew[crewMember].degree}`);
}
/*
Lily: Computer Engineering
Dan: Aerospace Engineering
Clementine: Physics
Shauna: Conservation Science
*/



// this keyword

const robot = {
    model : '1E78V2',
    energyLevel : 100,
    provideInfo() {
        return `I am ${this.model} and my current energy level is ${this.energyLevel}`;
    }
};

console.log(robot.provideInfo());   
// I am 1E78V2 and my current energy level is 100



// arrow function and this

/*
const robot2 = {
    energyLevel: 100,
    checkEnergy: () => {
      console.log(`Energy is currently at ${this.energyLevel}%.`)
    }
  }
  robot2.checkEnergy();
*/
// Energy is currently at undefined%.

const robot2 = {
    energyLevel: 100,
    checkEnergy: function () {
        console.log(`Energy is currently at ${this.energyLevel}%.`)
    }
}

robot2.checkEnergy();
// Energy is currently at 100%.



// privacy

const robot3 = {
    _energyLevel: 100,
    recharge(){
        this._energyLevel += 30;
        console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
    }
};

robot3._energyLevel = 'high';
robot3.recharge();
// Recharged! Energy is currently at high30%.



// getters

const robot4 = {
    _model: '1E78V2',
    _energyLevel: 100,
    get energyLevel() {
    if (typeof(this._energyLevel)==='number') {
        return `My current energy level is ${this._energyLevel}`;
        } 
    else {
        return 'System malfunction: cannot retrieve energy level';
        }
    }
};

console.log(robot4.energyLevel);    
// My current energy level is 100



// setters

const robot5 = {
    _model: "1E78V2",
    _energyLevel: 100,
    _numOfSensors: 15,
    get numOfSensors() {
        if (typeof this._numOfSensors === "number") {
            return this._numOfSensors;
        } else {
            return "Sensors are currently down.";
        }
    },
    set numOfSensors(num) {
        if (typeof num === "number" && num >= 0) {
            this._numOfSensors = num;
        } else {
        console.log('Pass in a number that is greater than or equal to 0');
        }
    },
};

robot5.numOfSensors = 100;
console.log(robot5.numOfSensors);    // 100



// factory functions

let robotFactory = (model, mobile) => {
    return {
        model: model,
        mobile: mobile,
        beep(){
            console.log('Beep Boop');
        }
    }
}

const tinCan = robotFactory('P-500', true);
tinCan.beep();  // Beep Boop



// property value shorthand 

const robotFactory2 = (model, mobile) => {
    return {
        model,
        mobile,
        beep() {
            console.log('Beep Boop');
        }
    }
}

const newRobot = robotFactory2('P-501', false);
console.log(newRobot.model);    // P-501
console.log(newRobot.mobile);   // false



// destructed assignment 

const robot6 = {
    model: '1E78V2',
    energyLevel: 100,
    functionality: {
        beep() {
            console.log('Beep Boop');
        },
        fireLaser() {
            console.log('Pew Pew');
        },
    }
};

const {functionality} = robot6; 
functionality.beep();   // Beep Boop



// built in object methods 

const robot7 = {
    model: 'SAL-1000',
    mobile: true,
    sentient: false,
    armor: 'Steel-plated',
    energyLevel: 75
};

const robotKeys = Object.keys(robot7);
console.log(robotKeys);
// [ 'model', 'mobile', 'sentient', 'armor', 'energyLevel' ]

const robotEntries = Object.entries(robot7);
console.log(robotEntries);
/* 
    [ [ 'model', 'SAL-1000' ], [ 'mobile', true ], [ 'sentient', false ], 
    [ 'armor', 'Steel-plated' ], [ 'energyLevel', 75 ] ]
*/

const newRobot2 = Object.assign(robot7, {laserBlaster: true, voiceRecognition: true});
console.log(newRobot2);
/*
    { model: 'SAL-1000', mobile: true, sentient: false, armor: 'Steel-plated', 
     energyLevel: 75, laserBlaster: true, voiceRecognition: true }
*/