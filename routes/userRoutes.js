const express = require("express");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const router = express.Router();

// Register User
router.post("/register", async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.json(user);
});

// Login User
router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: user._id, role: user.role }, "secretKey", { expiresIn: "1h" });
    res.json({ token });
});

module.exports = router;
