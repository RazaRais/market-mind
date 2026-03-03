/*const express = require("express");
const router = express.Router();

const { askBot } = require("../controllers/chatbot.controller");

// Public chatbot route
router.post("/", askBot);

module.exports = router;*/

const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth.middleware");
const { askBot } = require("../controllers/chatbot.controller");

// Protect chatbot
router.post("/", authMiddleware, askBot);

module.exports = router;