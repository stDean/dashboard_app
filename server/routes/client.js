const express = require("express");
const {
  getProducts,
  getCustomers,
  getTransactions,
} = require("../controllers/clientCtrl");

const router = express.Router();

router.get("/products", getProducts);
router.get("/customers", getCustomers);
router.get("/transactions", getTransactions);

module.exports = router;
