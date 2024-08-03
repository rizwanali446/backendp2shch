const userModel = require("../models/user.model");
const bcyrpt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { generateToken } = require("../utils/generateToken");

//01 registerUser code below to create new user and already have an user
async function registerUser(req, res) {
  try {
    //A
    let { email, password, fullname } = req.body;

    //C if user already exist
    let user = await userModel.findOne({ email: email });
    if (user) {
      req.flash("error", "you already have an account pls login any other");
      // return res
      //   .status(401)
      //   .send("you already have an account pls login any other");
      return res.redirect("/");
    }

    //B
    bcyrpt.genSalt(10, function (err, salt) {
      bcyrpt.hash(password, salt, async function (err, hash) {
        if (err) return res.send(err.message);
        else {
          let user = await userModel.create({
            email,
            password: hash,
            fullname,
          });

          //below code to move generateToken.js so here  comnetd
          // const token = jwt.sign({ email, id: user._id }, "janab001", {
          //   expiresIn: "1h",
          // });
          //D
          let token = generateToken(user);
          res.cookie("token", token);
          req.flash("error", "user created successfully");
          res.redirect("/");
          // res.status(200).send("user created successfully");

          // res.send(user);
          // res.send(hash);
        }
      });
    });
  } catch (err) {
    res.send(err.message);
  }
}
module.exports.registerUser = registerUser;

//02
async function loginUser(req, res) {
  let { email, password } = req.body;
  let user = await userModel.findOne({ email: email });
  if (!user) {
    req.flash("error", "Email or password incorrect");
    return res.redirect("/");
  }
  bcyrpt.compare(password, user.password, function (err, result) {
    // res.send(result);
    if (result) {
      let token = generateToken(user);
      res.cookie("token", token);
      // console.log(token);
      // res.send("You can login now");
      res.redirect("/shop");
    } else {
      req.flash("error", "Email or password incorrect");
      return res.redirect("/");
    }
  });
}
module.exports.loginUser = loginUser;

//03 /Logout
function Logout(req, res) {
  res.cookie("token", "");
  //res.send("u logout");
  res.redirect("/");
}
module.exports.Logout = Logout;
