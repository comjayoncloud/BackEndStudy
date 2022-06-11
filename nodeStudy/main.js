const http = require("http");

users = ["tom", "andy", "jessica", "paul"];

let server = http.createServer(function (request, response) {
  if (request.url === "/") {
    response.end("<h1>Weclome</h1>");
  } else if (request.url === "/users") {
    response.end("<h1>" + users + "</h1>");
  } else if (request.url.split("/")[1] === "users") {
    //url : /users/1,/users/2, ..
    let userIdx = request.url.split("/")[2];
    let userName = users[userIdx - 1];

    response.end("<h1>" + userName + "</h1>");
  } else {
    response.end("<h1>Page not available</h1>");
  }
});

server.listen(3000);
