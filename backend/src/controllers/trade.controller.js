const Trade = require("../models/Trade");
const Portfolio = require("../models/Portfolio");
const { createOrder } = require("./order.controller");


// BUY (open trade)
exports.buyTrade = async (req, res) => {
  try {
    const { symbol, quantity, price } = req.body;
    const userId = req.user.id;

    const portfolio = await Portfolio.findOne({ userId });
    const cost = quantity * price;

    if (portfolio.cashBalance < cost) {
      return res.status(400).json({ message: "Insufficient balance" });
    }

    const trade = await Trade.create({
      userId,
      symbol,
      quantity,
      buyPrice: price,
    });
    await createOrder({
  userId,
  symbol,
  orderType: "BUY",
  quantity,
  price,
});


    portfolio.cashBalance -= cost;
    await portfolio.save();

    res.status(201).json({
      message: "Trade opened successfully",
      trade,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// SELL (close trade)
// SELL (close trade)
exports.sellTrade = async (req, res) => {
  try {
    const { tradeId, price } = req.body;
    const userId = req.user.id;

    const trade = await Trade.findOne({
      _id: tradeId,
      userId,
      status: "OPEN",
    });

    // ✅ ALWAYS CHECK FIRST
    if (!trade) {
      return res.status(404).json({
        message: "No open trade found to sell",
      });
    }

    // ✅ NOW it is safe to access trade fields
    await createOrder({
      userId,
      symbol: trade.symbol,
      orderType: "SELL",
      quantity: trade.quantity,
      price,
    });

    trade.sellPrice = price;
    trade.status = "CLOSED";
    trade.pnl = (price - trade.buyPrice) * trade.quantity;
    await trade.save();

    const portfolio = await Portfolio.findOne({ userId });
    portfolio.cashBalance += price * trade.quantity;
    portfolio.totalValue += trade.pnl;
    await portfolio.save();

    res.json({
      message: "Trade closed successfully",
      trade,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// GET OPEN TRADES
exports.getOpenTrades = async (req, res) => {
  try {
    const trades = await Trade.find({
      userId: req.user.id,
      status: "OPEN",
    });

    res.json(trades);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
