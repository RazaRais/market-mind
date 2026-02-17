const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth.middleware");

const { getPortfolio } = require("../controllers/portfolio.controller");

router.get("/", authMiddleware, getPortfolio);

module.exports = router;
