const express = require("express");

const app = express(); // 관습적으로 app

let members = require("./members");

app.get("/api/members", (req, res) => {
  res.send(members);
}); // 콜백 혹은 route handler라고함
// req : 이 객체를 통해서 클라이언트가 보낸 request를 다룰수 있음
// res : 이 객체를 통해서 적절한 리스폰스를 보낼수 있다.

app.listen(3000, () => {
  console.log("server is listening..");
});
