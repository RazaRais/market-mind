const mongoose = require("mongoose");

const portfolioSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    cashBalance: {
      type: Number,
      default: 100000, // paper trading capital
    },
    totalValue: {
      type: Number,
      default: 100000,
    },
    riskLevel: {
      type: String,
      enum: ["LOW", "MODERATE", "HIGH"],
      default: "LOW",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Portfolio", portfolioSchema);
