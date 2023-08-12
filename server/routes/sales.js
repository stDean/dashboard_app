const express = require("express");
const { getSales } = require("../controllers/salesCtrl");

const router = express.Router();

router.get("/", getSales);

module.exports = router;
