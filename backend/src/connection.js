const mongoose = require("mongoose");

// MongoDB Server
const connection = "mongodb://mongo:27017/mongo-test";

const connectDatabase = () => {
  return mongoose.connect(connection);
};

module.exports = connectDatabase;
