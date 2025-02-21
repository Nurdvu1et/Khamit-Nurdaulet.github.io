const express = require("express");
const Product = require("../models/Product");
const auth = require("../middleware/authMiddleware"); // Import auth middleware
const router = express.Router();

// Create a product (protected)
router.post("/", auth, async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Read all products (public, no auth required)
router.get("/", async (req, res) => {
    const products = await Product.find().populate("details");
    res.json(products);
});

// Update a product (protected)
router.put("/:id", auth, async (req, res) => {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(product);
});

// Delete a product (protected)
router.delete("/:id", auth, async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Product deleted" });
});

module.exports = router;
