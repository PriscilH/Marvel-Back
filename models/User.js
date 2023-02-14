const mongoose = require("mongoose");

const User = mongoose.model("User", {
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true
    },
    token: String,
    hash: String,
    salt: String
});

module.exports = User;