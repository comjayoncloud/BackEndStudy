// 하나의 모듈에서 다른 모듈을 사용하는 방법

const { subtract } = require("./math-tools");
let m = require("./math-tools"); // require : 모듈을 로드해서 객체 1개를 리턴

// console.log(m.add(1, 2));
// console.log(m.add(1, 2));

console.log(m.PI);
console.log(m.add(2, 4));
console.log(m, subtract(1, 2));
console.log(m.multiply(1, 2));
console.log(m.divide(1, 2));
