// 1. const, let

if (true) {var x = 3;}
console.log(x);   // 3

if (true) {const y = 3;}
console.log(y);   // ReferenceError: y is not defined

const a = 0;
a = 1;            // TypeError: Assignment to constant variable

let b = 0;
b = 1;            // 1

// const : 초기화 시 값 할당 필수 
// const c;          // SyntaxError: Missing initializer in const declaration



// 2. 템플릿 문자열 

const num3 = 1;
const num4 = 2;
const result2 = 3;

const string2 = `${num3} 더하기 ${num4}는 ' ${result2}'`;

console.log(string2);   // 1 더하기 2는 '3'



// 3. 객체 리터럴

var sayNode = function() {console.log('Node');};
var es = 'ES' 

// before
var oldObject = {
    sayJS : function() {console.log('JS');}, 
    sayNode : sayNode
};

oldObject[es + 6] = 'Fantastic';    // ES6 : 'Fantastic'
oldObject.sayNode();                // Node
oldObject.sayJS();                  // JS
console.log(oldObject.ES6);         // Fantastic

// after
const newObject = {
    // (1) 콜론(:)과 function 키워드 생략 가능 
    sayJS() {console.log('JS');},
    // (2) 속성명과 변수명이 동일한 경우 한 번만 작성해도 됨 
    sayNode, 
    // (3) 객체의 속성명 동적으로 생성 가능 
    [es + 6] : 'Fantastic'
}

newObject.sayNode();        // Node
newObject.sayJS();          // JS
console.log(newObject.ES6); // Fantastic



// 4. 화살표 함수 

function add1(x, y) {return x + y;}

// (1) function 키워드 대신 => 기호로 선언, 변수에 대입 가능 
const add2 = (x, y) => {return x + y;};

// (2) return문 밖에 없으면 return 키워드 생략 가능 
const add3 = (x, y) => x + y;
const add4 = (x, y) => (x + y);

// (3) 매개변수가 1개이면 소괄호() 생략 가능 
function not1(x) {return !x;}
const not2 = x => !x ;

// (4) this 바인드 방식 
var relationship1 = {
    name : 'zero', 
    friends : ['nero', 'hero', 'xero'],
    logFriends : function() {
        // this는 relationship1을 가리킨다.
        var that = this;    
        // this는 logFriends를 가리킨다.
        this.friends.forEach(function(friend){console.log(that.name, friend)});
    }
};

const relationship2 = {
    name : 'zero',
    friends : ['nero', 'hero', 'xero'],
    // 두 this 모두 relationship1을 가리킨다. 
    logFriends() {this.friends.forEach(friend => console.log(this.name, friend))}
};



// 5. 구조 분해 할당

// before
var candyMachine = {
    status : {
        name : 'node', 
        count : 5
    },
    getCandy : function () {
        this.status.count--;
        return this.status.count;
    }
};
// 객체의 속성을 같은 이름의 변수에 대입 
var getCandy = candyMachine.getCandy;
var count = candyMachine.status.count;

// after 
const candyMachine = {
    status : {
        name : 'node',
        count : 5
    },
    getCandy() {
        this.status.count--;
        return this.status.count;
    }
};
// candyMachine 객체의 속성을 변수와 매칭, getCandy와 count 변수 초기화 
const {getCandy, status : {count}} = candyMachine;


// bind를 사용해 this를 고정
const boundGetCandy = getCandy.bind(candyMachine);


// 배열에 대한 구조 분해 할당 

// before
var array = ['nodejs', {}, 10, true];
var node = array[0];
var obj = array[1];
var bool = array[3];

// after 
const array = ['nodejs', {}, 10, true];
const [node, obj, , bool] = array; 



// 6. 클래스

// before 
var Human = function(type) {
    this.type = type || 'human';
};

Human.isHuman = function(human) {
    return human instanceof Human;
}

Human.prototype.breathe = function() {
    alert('h-a-a-a-m');
};

var Zero = function(type, firstName, lastName) {
    Human.apply(this, arguments);
    this.firstName = firstName;
    this.lastName = lastName;
};

Zero.prototype = Object.create(Human.prototype);
Zero.prototype.constructor = Zero; // 상속하는 부분
Zero.prototype.sayName = function() {
  alert(this.firstName + ' ' + this.lastName);
};
var oldZero = new Zero('human', 'Zero', 'Cho');
Human.isHuman(oldZero); // true


// after 
class Human {
    constructor(type = 'human') {
      this.type = type;
    }
  
    static isHuman(human) {
      return human instanceof Human;
    }
  
    breathe() {
      alert('h-a-a-a-m');
    }
  }
  
  class Zero extends Human {
    constructor(type, firstName, lastName) {
      super(type);
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    sayName() {
      super.breathe();
      alert(`${this.firstName} ${this.lastName}`);
    }
  }
  
  const newZero = new Zero('human', 'Zero', 'Cho');
  Human.isHuman(newZero); // true



// 7. 프로미스

const condition = true; // true이면 resolve, false이면 reject

// new Promise로 프로미스 객체 생성
const promise = new Promise((resolve, reject) => { 
    if (condition) {resolve('성공');}
    else {reject('실패');}
});

// then과 catch 메서드
promise
    .then((message) => {
        console.log(message); // 성공(resolve)한 경우 실행
    })
    .catch((error) => {
        console.error(error); // 실패(reject)한 경우 실행
    })
    .finally(() => {
        console.log('무조건'); // 성공, 실패에 관계 없이 실행
    });

// then, cathch 연결 
promise
    .then((message) => {
        return new Promise((resolve, reject) => {resolve(message);});
    })      
    // 처음 then에서 message를 resolve하면 다음 then에서 message2로 받을 수 있다.
          
    .then((message2) => {
        console.log(message2);
        return new Promise((resolve, reject) => {resolve(message2);});
    })
          
    // 다시 message2를 resolve한 것을 다음 then에서 message3으로 받았다.
    // then에서 new Promise를 return해야 다음 then에서 받을 수 있다 
          
    .then((message3) => {
        console.log(message3);
    })
        
    .catch((error) => {
        console.error(error);
    });
     
// 프로미스를 이용해 콜백 함수가 여러 번 중첩되는 문제를 해결할 수 있다.  
function findAndSaveUser(Users) {
      Users.findOne({}, (err, user) => { // 첫 번째 콜백
        if (err) {return console.error(err);}
        user.name = 'zero';
        user.save((err) => { // 두 번째 콜백
          if (err) {return console.error(err);}
          Users.findOne({ gender: 'm' }, (err, user) => { // 세 번째 콜백
            // 생략
          });
        });
      });
    }

function findAndSaveUser(Users) {
      Users.findOne({})
        .then((user) => {
          user.name = 'zero';
          return user.save();
        })
        .then((user) => {
          return Users.findOne({ gender: 'm' });
        })
        .then((user) => {
          // 생략
        })
        .catch(err => {
          console.error(err);
        });
    }
      
    
// Promise.all
const promise1 = Promise.resolve('성공1');
const promise2 = Promise.resolve('성공2');

Promise.all([promise1, promise2])
    .then((result) => {
        console.log(result); // ['성공1', '성공2'];
    })
    .catch((error) => {
        console.error(error);
    });
 
// Promise.resolve, Promise.reject, Project.allSettled
const promise3 = Promise.resolve('성공1');
const promise4 = Promise.reject('실패2');
const promise5 = Promise.resolve('성공3');

Promise.allSettled([promise3, promise4, promise5])

    .then((result) => {
        console.log(result);
    /* [
    *    { status: 'fulfilled', value: '성공1' },
    *    { status: 'rejected', reason: '실패2' },
    *    { status: 'fulfilled', value: '성공3' }
    *  ]
    */
      })
      .catch((error) => {
        console.error(error);
      });
      

    try {
      Promise.reject('에러');
    } catch (e) {
      console.error(e); // UnhandledPromiseRejection: This error originated either by throwing inside...
    }
    
    Promise.reject('에러').catch(() => {
      // catch 메서드를 붙이면 에러가 발생하지 않음
    })
    
    

// 8. async / await 

// (1) async funtion으로 함수 선언 
async function findAndSaveUser(Users) {
    try {
        // (2) 프로미스 앞에 await -> 프로미스가 resolve될 때까지 기다린 후 user 변수 초기화
        let user = await Users.findOne({});
        user.name = 'zero';
        user = await user.save();
        user = await Users.findOne({gender : 'm'});
        // 생략 
    } 
        // (3) 에러를 처리하는 reject가 없으므로, try/catch문 이용 
    catch (error) {
        console.error(error);
    }
}

// 화살표 함수 
const findAndSaveUser = async (Users) => {
  try {
    let user = await Users.findOne({});
    user.name = 'zero';
    user = await user.save();
    user = await Users.findOne({ gender: 'm' });
    // 생략
  } catch (error) {
    console.error(error);
  }
};

// for문 
const promise6 = Promise.resolve('성공1');
const promise7 = Promise.resolve('성공2');
(async () => {
  for await (promise of [promise6, promise7]) {
    console.log(promise);
  }
})();


// for await of
async function findAndSaveUser(Users) {
  // 생략
}
findAndSaveUser().then(() => { /* 생략 */ });
// 또는
async function other() {
  const result = await findAndSaveUser();
}



// 9. Map / Set  

const m = new Map();
// (1) set(키, 값)
m.set('a', 'b');
m.set(3, 'c');
const d = {};
m.set(d, 'e');          // 객체도 가능 
// (2) get(키)
console.log(m.get(d));  // e
// (3) size
console.log(m.size);    // 3
// (4) 반복문, forEach 사용 가능 
for (const [k, v] of m) {console.log(k, v);}
m.forEach((v, k) => {console.log(k, v);});
// (5) has(키) 
console.log(m.has(d));
// (6) delete(키), clear()
m.delete(d);
m.clear();             // 전부 제거 
console.log(m.size);   // 0

const s = new Set();

s.add(1);
s.add(2);
s.add('1');
s.add(1);   // 중복이므로 무시된다. 

console.log(s.size);     // size : 3
console.log(s.has(1));   // 존재 여부 : true

for (const a of s) {console.log(a);}    // 1 2 '1'
s.forEach((a) => {console.log(a);})     // 1 2 '1'

s.delete(2);    // delete()로 요소 2 제거 
s.clear();      // clear()로 모든 요소 제거 

const arr = [1, 3, 2, 7, 2, 6, 3, 5];
const s2 = new Set(arr);    // 배열의 중복 요소 제거 
const result = Array.from(s);   // set을 배열로 되돌리기 
console.log(result);    // 1, 3, 2, 5, 7



// 10. 널 병합 / 옵셔널 체이닝 

// (1) 널 병합
const a2 = 0;
const b2 = a2 || 3; 
console.log(b2);   // 3

const c = 0;
const d2 = c ?? 3; // ?? 연산자는 null과 undefined일 때만 뒤로 넘어감
console.log(d2);   // 0;

const e = null;
const f = e ?? 3;
console.log(f); // 3;

const g = undefined;
const h = g ?? 3;
console.log(h); // 3; 

// (2) 옵셔널 체이닝
const a1 = {};
a1.b;    // a가 객체이므로 문제 없다. 

const c1 = null;
try {
    c1.d;
} catch (e) {
    console.error(e);   // TypeError: Cannot read properties of null
}

c1?.d;   // 문제 없음 

try {
    c1.f();
} catch (e) {
    console.error(e);   //  TypeError: Cannot read properties of null
}

c1?.f(); // 문제 없음. 객체 뿐만 아니라 함수도 

try {
    c1[0];
} catch (e) {
    console.error(e);   // TypeError: Cannot read properties of nul
}