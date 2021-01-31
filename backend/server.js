const express = require("express");
const app = express();
port = 3000;

const users = [];

app.use(express.json());

app.get("/api/users", (req, res) => {
  console.log("api/users called!");
  res.json(users);
});

app.post("/api/user", (req, res) => {
  const user = req.body.user;
  console.log("Adding user:::::", user);
  users.push(user);
  res.json("user addedd");
});

app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});
