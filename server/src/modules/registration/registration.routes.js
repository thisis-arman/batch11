const express = require("express");
const { registerUser, getUsers } = require("./registration.controller");

const router = express.Router();

router.get("/users", getUsers);
router.post("/register", registerUser);

module.exports = {
  registrationRoute: router,
};
