const express = require("express");

const router = express.Router();
router.get("/", function (req, res) {
  res.send("userrouter ready or working");
});
module.exports = router;
