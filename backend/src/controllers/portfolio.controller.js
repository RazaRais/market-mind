const { calculateRiskLevel } = require("../services/risk.service");
const Portfolio = require("../models/Portfolio");

exports.getPortfolio = async (req, res) => {
  try {
    let portfolio = await Portfolio.findOne({ userId: req.user.id });

    if (!portfolio) {
      portfolio = await Portfolio.create({ userId: req.user.id });
    }

    const riskLevel = await calculateRiskLevel(req.user.id, portfolio);

    portfolio.riskLevel = riskLevel;
    await portfolio.save();

    res.json(portfolio);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
