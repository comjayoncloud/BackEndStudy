const http = require("http"); // etc

const express = require("express");

const app = express();

const users = ["Tom", "Andy", "Jessica", "Paul"]; // const

app.get("/", (request, response) => {
  response.end("<h1>Weclome</h1>");
});

app.get("/users", (request, response) => {
  response.end(`<h1>${users}</h1>`);
});

app.get("/users/:id", (request, response) => {
  // 이위치에 오는 값을 id 라는 속성에 담으라는 express의 표기법
  console.log(request.params); // split 쓰지않고 유연하게 쓸 수 있음.
  const userName = users[request.params.id - 1];
  response.end(`<h1>${userName}</h1>`);
});

app.get("*", (request, response) => {
  response.end("<h1>Page not available</h1>");
});

app.listen(3000);

// const users = ["Tom", "Andy", "Jessica", "Paul"]; // const

// const server = http.createServer((request, response) => {
//   // Arrow Function, const
//   if (request.url === "/") {
//     response.end("<h1>Welcome!</h1>");
//   } else if (request.url === "/users") {
//     response.end(`<h1>${users}/h1>`); // Template String
//   } else if (request.url.split("/")[1] === "users") {
//     // url : /users/1, /users/2, .. // etc
//     const userIdx = request.url.split("/")[2];
//     const userName = users[userIdx - 1]; // etc

//     response.end(`<h1>${userName}</h1>`); // Template String
//   } else {
//     response.end("<h1>Page Not Available</h1>");
//   }
// });

// server.listen(3000);
