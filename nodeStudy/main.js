const EventEmitter = require("events"); // 코어모듈

const myEmitter = new EventEmitter(); // 객체로 만들어줘야 사용이 가능

//하나의 이벤트에 여러개의 콜백을 설정
myEmitter.on("test", () => {
  console.log("1!");
});
myEmitter.on("test", () => {
  console.log("2!");
});
myEmitter.on("test", () => {
  console.log("3!");
});

myEmitter.emit("test");
