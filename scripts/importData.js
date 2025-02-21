const axios = require("axios");
const mongoose = require("mongoose");
const Product = require("../models/Product");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI);

(async () => {
    const response = await axios.get("https://api.example.com/products");
    await Product.insertMany(response.data);
    console.log("Data Imported");
    process.exit();
})();
