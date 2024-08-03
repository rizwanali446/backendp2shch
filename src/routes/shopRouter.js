const express = require("express");
const { isLoggedIn } = require("../middlewares/isLoggedIn");
const productModel = require("../models/product.model");

const router = express.Router();

router.get("/", isLoggedIn, async function (req, res) {
  let products = await productModel.find();

  res.render("shop", { products });
});

// router.get("/logout", isLoggedIn, function (req, res) {
//   res.render("shop");
// });
module.exports = router;
