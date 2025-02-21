const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: String,
    password: String,
    role: { type: String, enum: ["user", "admin"], default: "user" }
});

module.exports = mongoose.model("User", UserSchema);

UserSchema.index({ email: 1 });
