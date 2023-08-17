const express = require("express");
const { getUser, getDashboardStats } = require("../controllers/generalCtrl");

const router = express.Router();

router.route("/user/:id").get(getUser);
router.route("/dashboard").get(getDashboardStats);

module.exports = router;
