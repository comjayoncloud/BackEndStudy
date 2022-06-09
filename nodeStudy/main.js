const EventEmitter = require("events"); // 코어모듈

const myEmitter = new EventEmitter(); // 객체로 만들어줘야 사용이 가능

const obj = { type: "text", data: "hello codeit", date: "2020-09-01" };

myEmitter.on("test", (info) => {
  console.log(info);
});

myEmitter.emit("test", obj);
