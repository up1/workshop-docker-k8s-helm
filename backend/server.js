const express = require("express");
const app = express();
const connectDatabase = require("./src/connection");
const User = require("./src/user");
port = 3000;

const a = 2;

// const users = [];

app.use(express.json());

app.get("/api/users", async (req, res) => {
  console.log("api/users called!");
  //   From MongoDB
  const users = await User.find();
  res.json(users);
});

app.post("/api/user", async (req, res) => {
  const _user = req.body;
  console.log("Adding user:::::", _user);
  //   users.push(user);
  const user = new User({ username: _user.name, age: _user.age });
  // Save to MongoDB
  await user.save().then(() => console.log("User created"));

  res.json("user addedd");
});

app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);

  connectDatabase().then(() => {
    console.log("MongoDb connected");
  });
});
