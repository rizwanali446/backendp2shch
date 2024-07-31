const express = require("express");

const router = express.Router();
router.get("/", function (req, res) {
  res.send("ownerrouter ready or working");
});
module.exports = router;
