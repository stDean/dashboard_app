const User = require("../model/User");
const Transaction = require("../model/Transaction");
const mongoose = require("mongoose");

const getAdmins = async (req, res) => {
  try {
    const admins = await Users.find({ role: "admin" }).select("-password");
    res.status(200).json(admins);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

/**
 *  This uses aggregate calls like Joins in SQL
 *  Using 2 DB tables and combining them(aggregating them) and using the info in the frontend.
 *
 * $lookuo from affiliatestats table, compare the localField(_id from the users table) to foreignField(userId from affiliatestat table) and display the info as affiliateStats
 * $unwind === flatten the affiliateStats array returned
 */
const getUserPerformance = async (req, res) => {
  try {
    const { id } = req.params;
    const userWithStats = await User.aggregate([
      { $match: { _id: new mongoose.Types.ObjectId(id) } },
      {
        $lookup: {
          from: "affiliatestats",
          localField: "_id",
          foreignField: "userId",
          as: "affiliateStats",
        },
      },
      { $unwind: "$affiliateStats" },
    ]);

    const saleTransactions = await Promise.all(
      userWithStats[0].affiliateStats.affiliateSales.map((id) => {
        return Transaction.findById(id);
      })
    );

    const filteredSaleTransactions = saleTransactions.filter(
      (transaction) => transaction !== null
    );

    res
      .status(200)
      .json({ user: userWithStats[0], sales: filteredSaleTransactions });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  getAdmins,
  getUserPerformance,
};
