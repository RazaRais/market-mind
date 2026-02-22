const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth.middleware");
const {
  getInsights,
  getPerformance,
} = require("../controllers/ai.controller");

router.get("/insights", authMiddleware, getInsights);
router.get("/performance", authMiddleware, getPerformance);

module.exports = router;