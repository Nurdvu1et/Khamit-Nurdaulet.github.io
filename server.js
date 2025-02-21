require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));

const productRoutes = require("./routes/productRoutes");
app.use("/products", productRoutes);

const authRoutes = require("./routes/authRoutes");
app.use("/auth", authRoutes);
