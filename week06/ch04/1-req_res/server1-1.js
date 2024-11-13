const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.write('<h1>Hello Node!</h1>');
  res.end('<p>Hello Server!</p>');
});

// 서버에 listening 이벤트 리스너 붙이는 방식 
server.listen(8080);

server.on('listening', () => {  // listening 이벤트 리스너
  console.log('8080번 포트에서 서버 대기 중입니다!');
});
server.on('error', (error) => { // error 이벤트 리스너
  console.error(error);
});