const express = require("express");
const { findAll } = require("../controllers/course.controller");
const router = express.Router();
router.route("/").get(findAll);
module.exports = router;
