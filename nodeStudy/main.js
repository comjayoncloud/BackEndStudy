const http = require("http");

users = ["tom", "andy", "jessica", "paul"];

let server = http.createServer(function (request, response) {
  if (request.url === "/") {
    response.end("<h1>Weclome</h1>");
  } else if (request.url === "/users") {
    response.end("<h1>" + users + "</h1>");
  } else {
    response.end("<h1>Page not available</h1>");
  }
});

server.listen(3000);
