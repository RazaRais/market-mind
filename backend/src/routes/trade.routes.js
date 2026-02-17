const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth.middleware");

const {
  buyTrade,
  sellTrade,
  getOpenTrades,
} = require("../controllers/trade.controller");

router.post("/buy", authMiddleware, buyTrade);
router.post("/sell", authMiddleware, sellTrade);
router.get("/open", authMiddleware, getOpenTrades);

module.exports = router;
