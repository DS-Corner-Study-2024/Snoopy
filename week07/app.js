const express = require('express');   // express 모듈을 실행해 app 변수에 할당 
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');

dotenv.config();
const app = express();  // 익스프레스 내부에 http 모듈 내장 -> 서버의 역할
app.set('port', process.env.PORT || 3000);  // app.set('port', 포트) : 서버가 실행될 포트 설정 
                                            // process.env 객체에 PORT 속성이 있다면 사용하고, 없다면 기본값 3000번 포트 이용 
app.use(morgan('dev')); // GET / 500 20.198 ms - 50
//app.use(morgan('combined')); //::1 - - [18/Nov/2024:04:05:35 +0000] "GET / HTTP/1.1" 500 50 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36"
// app.use(morgan('common'));  // ::1 - - [18/Nov/2024:04:06:32 +0000] "GET / HTTP/1.1" 500 50
// app.use(morgan('short')); // ::1 - GET / HTTP/1.1 500 50 - 8.182 ms
// app.use(morgan('tiny'));  // GET / 500 50 - 9.405 ms
app.use('/', express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true,
    secure: false,
  },
  name: 'session-cookie',
}));

app.use((req, res, next) => {
  console.log('모든 요청에 다 실행됩니다.');
  next();
});

/* app.get(주소, 라우터) : 주소에 대한 GET 요청이 들어올 때 어떤 동작을 할 지 
app.get('/', (req, res) => {  // req : 요청에 관한 정보 객체, res : 응담에 관한 정보 객체
  res.send('Hello, Express'); // 응답 내용, 익스프레스에서는 res.send 사용 
  res.sendFile(path.join(__dirname, '/index.html'));
});*/

app.get('/', (req, res, next) => {
  console.log('GET / 요청에서만 실행됩니다.');
  next();
}, (req, res) => {
  throw new Error('에러는 에러 처리 미들웨어로 갑니다.')
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err.message);
});

// listen을 하는 부분은 http 웹 서버와 동일
app.listen(app.get('port'), () => { // app.get('port')로 포트 가져옴
  console.log(app.get('port'), '번 포트에서 대기 중');
});