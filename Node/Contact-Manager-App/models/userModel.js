const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please enter the name"]
    },
    email: {
        type: String,
        required: [true, "Please enter the email"],
        unique: [true, "Email already exists"]
    },
    password: {
        type: String,
        required: [true, "Please enter the Password"]
    }
},{
    timestamps: true
});

module.exports = mongoose.model("User", userSchema)