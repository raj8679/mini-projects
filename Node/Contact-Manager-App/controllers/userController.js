const asyncHandler = require("express-async-handler")
const bcrypt = require("bcrypt")
const User = require("../models/userModel")
const jwt = require("jsonwebtoken")

const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        console.log("fields are missing");
        res.status(400);
        throw new Error("All Fields are madatory!");
    }
    const userAvailable = await User.findOne({ email })
    if (userAvailable) {
        console.log("user already exists")
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
    if (user) {
        res.status(201).json({ _id: user.id, email: user.email })
    } else {
        res.status(400)
        throw new Error("User data is not found")
    }
    res.json({ msg: "Register the user" })
});

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400)
        throw new Error("All Fields are mandatory !")
    }
    const user = User.find({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
        const accessToken = jwt.sign({
            user: {
                username: user.username,
                email: user.email,
                id: user.id
            },
        }, process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "1m" }
        )
        res.status(200).json({ accessToken })
    } else {
        res.status(401)
        throw new Error("email or password is not valid")
    }
    res.json({ msg: "Login the user" })
});

const currentUser = asyncHandler(async (req, res) => {
    res.json({ msg: "Current user information" })
})
module.exports = { registerUser, loginUser, currentUser }