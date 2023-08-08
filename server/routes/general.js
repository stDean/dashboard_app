const express = require("express");
const { getUser } = require("../controllers/generalCtrl");

const router = express.Router();

router.route("/user/:id").get(getUser);

module.exports = router;
