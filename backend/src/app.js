const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth.routes");
const portfolioRoutes = require("./routes/portfolio.routes");
const tradeRoutes = require("./routes/trade.routes");
const orderRoutes = require("./routes/order.routes");
const aiRoutes = require("./routes/ai.routes");
const chatbotRoutes = require("./routes/chatbot.routes");

const app = express();

app.use(cors());
app.use(express.json());  

app.use("/api/auth", authRoutes);
app.use("/api/portfolio", portfolioRoutes);
app.use("/api/trades", tradeRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/chatbot", chatbotRoutes);

app.use((req, res, next) => {
  console.log("Content-Type:", req.headers["content-type"]);
  next();
});

app.get("/", (req, res) => {
  res.send("Market Mind Backend Running");
});

module.exports = app;