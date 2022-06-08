const fs = require("fs"); // 코어 모듈

// console.log("start");

// let content = fs.readFileSync("./new", "utf8");

// console.log(content);

// console.log("finish");

console.log("start");

fs.readFile("./new", "utf8", (error, data) => {
  console.log(data);
});

console.log("finish");
