const EventEmitter = require("events"); // 코어모듈

const myEmitter = new EventEmitter(); // 객체로 만들어줘야 사용이 가능

myEmitter.on("test", (arg1, arg2, arg3, arg4) => {
  console.log(arg1);
  console.log(arg2);
  console.log(arg3);
  console.log(arg4);
});

myEmitter.emit("test", "apple", "banana", "pear");
