const http = require("http"); // 코어모듈

let server = http.createServer(function (request, response) {
  console.log(request.url);
  // response.end("<h1>Hello world!</h1>");
});
//request는 클라이언트의 요청에 대한 객체 , response는 서버가 응답할 객체
server.listen(3000); // 클라이언트 요청 받을 준비가됨
