const express = require("express");

const app = express(); // 관습적으로 app

const db = require("./models");

const { Member } = db;

console.log(Member);

app.use(express.json());

app.get("/api/members", async (req, res) => {
  const { team } = req.query;
  if (team) {
    const teamMembers = await Member.findAll({ where: { team } });
    res.send(teamMembers);
  } else {
    // console.log(Member);
    const members = await Member.findAll(); // 모든 row 조회해서 가져옴
    res.send(members);
  }
}); // 콜백 혹은 route handler라고함
// req : 이 객체를 통해서 클라이언트가 보낸 request를 다룰수 있음
// res : 이 객체를 통해서 적절한 리스폰스를 보낼수 있다.

app.get("/api/members/:id", async (req, res) => {
  // const id = req.params.id;
  const { id } = req.params;
  const member = await Member.findOne({ where: { id } });
  if (member) {
    res.send(member);
  } else {
    res.status(404).send({ message: "there is no member with the id!!" });
  }
}); // :id는 라우트 파라미터

app.post("/api/members", async (req, res) => {
  const newMember = req.body;
  const member = Member.build(newMember);
  await member.save();
  res.send(member);
});

app.put("/api/members/:id", (req, res) => {
  const { id } = req.params;
  const newInfo = req.body;
  const member = members.find((m) => m.id === Number(id));
  if (member) {
    Object.keys(newInfo).forEach((prop) => {
      member[prop] = newInfo[prop];
    });
    // Object.keys는 특정 객체의 모든 프로퍼티를 조회할수 있음
    res.send(member);
  } else {
    res.status(404).send({ message: "there is no memeber with the id!" });
  }
});

app.delete("/api/members/:id", (req, res) => {
  const { id } = req.params;
  const memberCount = members.length;
  members = members.filter((member) => member.id !== Number(id));
  if (members.length < memberCount) {
    res.send({ message: "Deleted" });
  } else {
    res.status(404).send({ message: "there is no member with the id!" });
  }
});

app.listen(3000, () => {
  console.log("server is listening..");
});
