const EventEmitter = require("events"); // 코어모듈

const myEmitter = new EventEmitter(); // 객체로 만들어줘야 사용이 가능
const myEmitter2 = new EventEmitter();

//이벤트를 발생시키고 그 이벤트에대한 콜백이 실행되는 현상은 하나의 이벤트 에미터 객체 내에서만 이뤄진다
myEmitter.on("test", () => {
  console.log("1!");
});
myEmitter.on("test", () => {
  console.log("2!");
});
myEmitter2.on("test", () => {
  console.log("3!");
});

myEmitter.emit("test");
