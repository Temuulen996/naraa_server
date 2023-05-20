const express = require("express");
const { findAll, findByID } = require("../controllers/course.controller");
const router = express.Router();
router.route("/").get(findAll);
router.route("/:id").get(findByID);
module.exports = router;
