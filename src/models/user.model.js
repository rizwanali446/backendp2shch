const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    fullname: String,
    email: String,
    password: String,
    cart: {
      type: Array,
      default: [],
    },
    // isAdmin: Boolean,
    // orders: {
    //   type: Array,
    //   default: [],
    // },  no need bcaus we create seprate owner model
    contact: Number,
    picture: String,
  },
  { timestamp: true }
);

module.exports = mongoose.model("user", userSchema);
