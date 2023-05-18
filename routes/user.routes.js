const express = require("express");
const router = express.Router();
router.route("/").get();
router.route("/:userID").get();
module.exports = router;
