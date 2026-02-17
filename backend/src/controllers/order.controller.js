const Order = require("../models/Order");

// CREATE ORDER (internal use)
exports.createOrder = async ({
  userId,
  symbol,
  orderType,
  quantity,
  price,
}) => {
  return await Order.create({
    userId,
    symbol,
    orderType,
    quantity,
    price,
    status: "FILLED",
  });
};

// GET ORDER HISTORY
exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.user.id })
      .sort({ createdAt: -1 });

    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
