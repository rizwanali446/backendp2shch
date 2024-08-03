const express = require("express");
const upload = require("../config/multer-config");

// const productModel = require("../models/product.model");
const router = express.Router();
const productModel = require("../models/product.model.js");
const { isLoggedIn } = require("../middlewares/isLoggedIn.js");

router.get("/create", isLoggedIn, async function (req, res) {
  res.render("createproducts", { success: {} });
});
//now below to get proudct in form with post method multipart is essential in form section of createproducts.ejs

router.post(
  "/create",
  isLoggedIn,
  upload.single("image"),
  async function (req, res) {
    try {
      let { name, price, discount, bgcolor, panelcolor, textcolor } = req.body;

      let product = await productModel.create({
        image: req.file.buffer,
        name,
        price,
        discount,
        bgcolor,
        panelcolor,
        textcolor,
      });
      req.flash("success", "Product created successfully");
      res.redirect("/owners/admin");
      //res.send(product);
      // console.log(product);
    } catch (err) {
      res.send(err.message);
    }
    //this below code is just check line no 12 and 26 to enter proudct in ui of createproducts.ejs
    // res.send(req.file);
  }
);
module.exports = router;
