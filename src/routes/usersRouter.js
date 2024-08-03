const express = require("express");
const {
  registerUser,
  loginUser,
  Logout,
} = require("../controllers/authController.js");
const { isLoggedIn } = require("../middlewares/isLoggedIn.js");
const router = express.Router();
router.get("/", function (req, res) {
  res.send("user router ready or working");
});

//01 now we create our home or index page register user
router.post("/register", registerUser);
//02 now we create our /login route after /register that already done
router.post("/login", loginUser);
///03
router.get("/logout", Logout);
module.exports = router;
