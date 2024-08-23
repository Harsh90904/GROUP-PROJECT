const express = require("express");
const { mongoose } = require("mongoose");

const userschema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});
const User = mongoose.model("User", userschema);

module.exports = User;
