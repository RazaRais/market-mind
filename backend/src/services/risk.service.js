const Trade = require("../models/Trade");

exports.calculateRiskLevel = async (userId, portfolio) => {
  const trades = await Trade.find({
    userId,
    status: "OPEN",
  });

  // No trades → low risk
  if (trades.length === 0) {
    return "LOW";
  }

  // Total invested amount
  const totalInvested = trades.reduce(
    (sum, t) => sum + t.buyPrice * t.quantity,
    0
  );

  // Find max single trade exposure
  const maxSingleTrade = Math.max(
    ...trades.map((t) => t.buyPrice * t.quantity)
  );

  // Risk rules (simple & explainable)
  if (
    maxSingleTrade > portfolio.cashBalance * 0.5 ||
    trades.length > 5
  ) {
    return "HIGH";
  }

  if (
    maxSingleTrade > portfolio.cashBalance * 0.3 ||
    trades.length >= 3
  ) {
    return "MODERATE";
  }

  return "LOW";
};
