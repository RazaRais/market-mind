const axios = require("axios");
const Portfolio = require("../models/Portfolio");

exports.askBot = async (req, res) => {
  try {
    console.log("Incoming body:", req.body);

    const message = req.body?.message;
    if (!message) {
      return res.status(400).json({
        reply: "Please send a valid message."
      });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.json({
        reply: "AI service not configured."
      });
    }

    // 🔎 Fetch logged-in user's portfolio
    const userId = req.user.id;
    const portfolio = await Portfolio.findOne({ userId });

    let portfolioSummary = "No portfolio data available.";

    if (portfolio) {
      portfolioSummary = `
User Portfolio:
- Total Value: ₹${portfolio.totalValue}
- Cash Balance: ₹${portfolio.cashBalance}
- Risk Level: ${portfolio.riskLevel}
`;
    }

    // 🤖 Call Gemini with portfolio context
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        contents: [
          {
            parts: [
              {
                text: `
You are a professional financial AI advisor.

Analyze the user's portfolio and provide structured advice.

Respond in this format:

1. 📌 Summary:
(1–2 lines)

2. 📊 Portfolio Insight:
- Bullet points analyzing portfolio
- Mention risk alignment
- Mention cash position

3. ⚠ Risk Note:
(Short caution)

${portfolioSummary}

User Question: ${message}
`
              }
            ]
          }
        ]
      },
      {
        headers: { "Content-Type": "application/json" }
      }
    );

    const reply =
      response.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No response generated.";

    return res.json({ reply });

  } catch (error) {
    console.error("Gemini Error:", error.response?.data || error.message);

    return res.json({
      reply: "AI service temporarily unavailable."
    });
  }
};