const http = require('http');

// http 모듈의 createServer 메서드 - 요청 들어올 때마다 콜백 함수 실행 
http.createServer((req, res) => { // req : 요청에 대한 객체, res : 응답에 대한 객체
  // res 객체의 메서드 
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' }); // 헤더(header)에 응답에 대한 정보 기록 
  res.write('<h1>Hello Node!</h1>');  // 본문(body)에 데이터 기록 
  res.end('<p>Hello Server!</p>');  // 응답 종료 
})

  // listen 메서드 
  .listen(8080, () => { // 포트 번호, 8080 포트에서 요청 오기를 기다린다.
    console.log('8080번 포트에서 서버 대기 중입니다!'); // 포트 연결 후 실행될 콜백 함수
});