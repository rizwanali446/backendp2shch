const express = require("express");
const { isLoggedIn } = require("../middlewares/isLoggedIn");
const productModel = require("../models/product.model");

const router = express.Router();
router.get("/", function (req, res) {
  let error = req.flash("error");
  res.render("index", { error });
  // res.send("index router or home page rediriction ready or working");
});

// router.get("/logout", isLoggedIn, function (req, res) {
//   res.render("shop");
// });
module.exports = router;
