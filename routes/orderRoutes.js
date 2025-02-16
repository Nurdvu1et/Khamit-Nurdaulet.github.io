const express = require("express");
const Order = require("../models/Order");
const router = express.Router();

// Create Order
router.post("/", async (req, res) => {
    const order = new Order(req.body);
    await order.save();
    res.json(order);
});

// Get Orders by User
router.get("/:userId", async (req, res) => {
    const orders = await Order.find({ userId: req.params.userId }).populate("productIds");
    res.json(orders);
});

module.exports = router;
