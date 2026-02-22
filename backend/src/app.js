const orderRoutes = require("./routes/order.routes");
const tradeRoutes = require("./routes/trade.routes");
const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth.routes");
const portfolioRoutes = require("./routes/portfolio.routes");
const aiRoutes = require("./routes/ai.routes");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/portfolio", portfolioRoutes);
app.use("/api/trades", tradeRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/ai", aiRoutes);



app.get("/", (req, res) => {
  res.send("Market Mind Backend Running");
});

module.exports = app;
