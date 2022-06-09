const EventEmitter = require("events"); // 코어모듈

const myEmitter = new EventEmitter(); // 객체로 만들어줘야 사용이 가능

myEmitter.emit("test");

myEmitter.on("test", () => {
  console.log("success!");
});

// myEmitter.emit("test");
