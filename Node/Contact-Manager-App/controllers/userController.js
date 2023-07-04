const asyncHandler = require("express-async-handler")
const bcrypt = require("bcrypt")
const User = require("../models/userModel")

const registerUser = asyncHandler(async(req, res) => {
    const {username, email, password} = req.body;
    if(!username || !email || !password) {
        res.status(400);
        console.log("fields are missing")
        throw new Error("All Fields are madatory!");
    }
    const userAvailable = await User.findOne({email})
    if(userAvailable) {
        res.status(400);
        throw new Error("User already exists");
    }
    // hash password 
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = await User.create({
        username,
        email,
        password: hashedPassword
    });
    if(user) {
        res.status(201).json({_id: user.id, email: user.email})
    } else {
        res.status(400)
        throw new Error("User data is not found")
    }
    res.json({msg: "Register the user"})
});

const loginUser = asyncHandler(async(req, res) => {
    res.json({msg: "Login the user"})
});

const currentUser = asyncHandler(async(req, res) => {
    res.json({msg: "Current user information"})
})
module.exports = { registerUser, loginUser, currentUser }