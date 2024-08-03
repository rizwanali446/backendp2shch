const express = require("express");
const router = express.Router();
const ownerModel = require("../models/owner.model.js");
const { isLoggedIn } = require("../middlewares/isLoggedIn.js");

//to run in development mode we use below code otherwise proudctuin
if (process.env.NODE_ENV === "development") {
  //console.log("develpment mode is  working");
  router.post("/create", async function (req, res) {
    // res.send(
    //   "owner router ready in develpment mode with create path e.g /create"
    // );
    //below code is owner check to chekc more than one owner or trying to create new owner insteaed of existed one owner
    let owners = await ownerModel.find();
    if (owners.length > 0) {
      return res
        .status(502)
        .send("you dont have permission to create new owner");
    }
    let { fullname, email, password } = req.body;
    let createdOwner = await ownerModel.create({
      fullname,
      email,
      password,
    });
    res.status(201).send(createdOwner);
    // res.send("we can create new owner");  <-this code for check
  });
}

router.get("/admin", isLoggedIn, function (req, res) {
  let success = req.flash("success");
  res.render("createproducts", { success });
  // res.send("owner router ready or working");
});

//console.log(process.env.NODE_ENV);  //development mode show in terminal

module.exports = router;
