const mongoose = require("mongoose");

const dbconnect = async (req, res) => {
  await mongoose.connect("mongodb://localhost:27017");
  console.log("mongodb connection successful");
};

module.exports = dbconnect;
