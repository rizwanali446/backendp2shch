const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/shortecomerce");
const userSchema = mongoose.Schema(
  {
    fullname: String,
    emai: String,
    password: String,
    cart: {
      type: Array,
      default: [],
    },
    isAdmin: Boolean,
    orders: {
      type: Array,
      default: [],
    },
    contact: Number,
    picture: String,
  },
  { timestamp: true }
);

module.exports = mongoose.model("user", userSchema);
