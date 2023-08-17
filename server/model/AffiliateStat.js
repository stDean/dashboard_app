const mongoose = require("mongoose");

const AffiliateStatSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Types.ObjectId, ref: "User" },
    // type is array of transaction id
    affiliateSales: {
      type: [mongoose.Types.ObjectId],
      ref: "Transaction",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("AffiliateStat", AffiliateStatSchema);
