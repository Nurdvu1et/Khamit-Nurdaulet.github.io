const mongoose = require("mongoose");

const DetailSchema = new mongoose.Schema({
    description: String,
    stock: Number,
    manufacturer: String
});

module.exports = mongoose.model("Detail", DetailSchema);
