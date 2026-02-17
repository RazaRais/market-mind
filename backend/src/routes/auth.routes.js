const express = require("express");
const router = express.Router();

const { signup, login } = require("../controllers/auth.controller");
const authMiddleware = require("../middleware/auth.middleware");

// public routes
router.post("/signup", signup);
router.post("/login", login);

// protected route
router.get("/me", authMiddleware, (req, res) => {
  res.json({
    message: "Authenticated user",
    userId: req.user.id,
  });
});

module.exports = router;
