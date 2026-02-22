const Trade = require("../models/Trade");
const Portfolio = require("../models/Portfolio");

exports.getInsights = async (req, res) => {
  try {
    const userId = req.user.id;

    const portfolio = await Portfolio.findOne({ userId });
    const openTrades = await Trade.find({ userId, status: "OPEN" });
    const closedTrades = await Trade.find({ userId, status: "CLOSED" });

    /* =========================
       METRICS CALCULATION
       ========================= */

    const totalTrades = closedTrades.length;

    const totalPnL = closedTrades.reduce((sum, t) => sum + (t.pnl || 0), 0);

    const winningTrades = closedTrades.filter(t => t.pnl > 0).length;
    const losingTrades = closedTrades.filter(t => t.pnl < 0).length;

    const winRate = totalTrades > 0
      ? ((winningTrades / totalTrades) * 100).toFixed(2)
      : 0;

    const avgPnL = totalTrades > 0
      ? (totalPnL / totalTrades).toFixed(2)
      : 0;

    const largestGain = closedTrades.length > 0
      ? Math.max(...closedTrades.map(t => t.pnl))
      : 0;

    const largestLoss = closedTrades.length > 0
      ? Math.min(...closedTrades.map(t => t.pnl))
      : 0;

    const exposureRatio =
      portfolio.totalValue > 0
        ? ((portfolio.totalValue - portfolio.cashBalance) / portfolio.totalValue).toFixed(2)
        : 0;

    /* =========================
       AI DECISION ENGINE
       ========================= */

    let advice = [];

    if (winRate < 40 && totalTrades > 5) {
      advice.push("Low win rate detected. Consider improving entry strategy.");
    }

    if (avgPnL < 0) {
      advice.push("Average PnL is negative. Risk management needs improvement.");
    }

    if (exposureRatio > 0.7) {
      advice.push("High portfolio exposure. Consider diversifying or booking profits.");
    }

    if (largestLoss < -5000) {
      advice.push("Large single loss detected. Use stop-loss strategy.");
    }

    if (winRate > 60) {
      advice.push("Strong performance. Maintain disciplined strategy.");
    }

    if (openTrades.length > 5) {
      advice.push("Too many open positions. Monitor actively.");
    }

    if (closedTrades.length === 0) {
      advice.push("No trading history yet. Start with small diversified trades.");
    }

    res.json({
      riskLevel: portfolio.riskLevel,
      totalTrades,
      winRate,
      totalPnL,
      avgPnL,
      largestGain,
      largestLoss,
      exposureRatio,
      advice,
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Performance Chart API
exports.getPerformance = async (req, res) => {
  try {
    const userId = req.user.id;

    const trades = await Trade.find({
      userId,
      status: "CLOSED",
    }).sort({ createdAt: 1 });

    let cumulative = 0;

    const performance = trades.map((t) => {
      cumulative += t.pnl;
      return {
        date: t.createdAt,
        cumulativePnL: cumulative,
      };
    });

    res.json(performance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};