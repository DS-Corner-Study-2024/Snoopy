const myURL = new URL('http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript');
console.log('searchParams:', myURL.searchParams);
console.log('searchParams.getAll():', myURL.searchParams.getAll('category'));   // 키에 해당하는 모든 값 가져오기
console.log('searchParams.get():', myURL.searchParams.get('limit'));            // 키에 해당하는 첫 번째 값만 가져오기
console.log('searchParams.has():', myURL.searchParams.has('page'));             // 해당 키가 있는지 없는지 검사 

console.log('searchParams.keys():', myURL.searchParams.keys());                 // searchParams의 모든 값을 반복기 객체로 가져오기
console.log('searchParams.values():', myURL.searchParams.values());             // searchParams의 모든 값을 반복기 객체로 가져오기

myURL.searchParams.append('filter', 'es3');                                     // 같은 키의 값 유지하고 하나 더 추가 
myURL.searchParams.append('filter', 'es5');
console.log(myURL.searchParams.getAll('filter'));

myURL.searchParams.set('filter', 'es6');                                        // 같은 키의 값 모두 지우고 새로 추가 
console.log(myURL.searchParams.getAll('filter'));

myURL.searchParams.delete('filter');                                            // 해당 키 제거 
console.log(myURL.searchParams.getAll('filter'));

console.log('searchParams.toString():', myURL.searchParams.toString());         // searchParams 객체를 문자열로
myURL.search = myURL.searchParams.toString();