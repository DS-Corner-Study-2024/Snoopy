const path = require('path');

const string = __filename;

console.log('path.sep:', path.sep);                     // 경로 구분자 - 윈도(\), POSIX(/)
console.log('path.delimiter:', path.delimiter);         // 환경 변수 구분자 - 윈도(;), POSIX(:)
console.log('------------------------------');
console.log('path.dirname():', path.dirname(string));   // 파일이 위치한 폴더 경로
console.log('path.extname():', path.extname(string));   // 파일의 확장자
console.log('path.basename():', path.basename(string)); // 파일의 이름 (확장자 포함)
console.log('path.basename - extname:', path.basename(string, path.extname(string)));       // 파일의 이름만 표시 
console.log('------------------------------');
console.log('path.parse()', path.parse(string));        // 파일 경로를 root, dir, base, ext, name으로 분리
console.log('path.format():', path.format({             // parse한 객체를 파일 경로로 합치기
    dir: 'C:/users/zerocho',
    name: 'path',
    ext: '.js',
}));
console.log('path.normalize():', path.normalize('C://users//zerocho//path.js'));            // 정상적인 경로로 변환
console.log('------------------------------');
console.log('path.isAbsolute(C:/):', path.isAbsolute('C:/'));                               // 경로가 절대경로인지 상대경로인지 true, false로 표시 
console.log('path.isAbsolute(./home):', path.isAbsolute('./home'));                 
console.log('------------------------------');
console.log('path.relative():', path.relative('C:/users/zerocho/path.js', 'C:/'));          // 첫 번째 경로에서 두 번째 경로로 가는 방법 
console.log('path.join():', path.join(__dirname, '..', '..', '/users', '.', '/zerocho'));   // 여러 인수를 하나의 경로로 합치기 - /를 절대 경로로 인식
console.log('path.resolve():', path.resolve(__dirname, '..', 'users', '.', '/zerocho'));    // 여러 인수를 하나의 경로로 합치기 - /를 상대 경로로 처리