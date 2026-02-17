const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth.middleware");

const { getOrders } = require("../controllers/order.controller");

router.get("/", authMiddleware, getOrders);

module.exports = router;
