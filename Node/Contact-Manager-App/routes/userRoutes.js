const express = require("express");
const route = express.Router();
const {registerUser, loginUser, currentUser} = require("../controllers/userController")

route.post("/register", registerUser)

route.post("/login", loginUser)

route.get("/current", currentUser)

module.exports = route