const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    details: { type: mongoose.Schema.Types.ObjectId, ref: "Detail" }
});

module.exports = mongoose.model("Product", ProductSchema);
