const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    username: String,
    password: String,
    created: Date
});

module.exports = mongoose.model("users", UserSchema);
