const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/profile", authMiddleware, (req, res) => {
    res.json({ message: "This page can only be accessed by logged-in users!", user: req.user });
});

module.exports = router;
