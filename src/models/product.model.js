const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/shortecomerce");
const productSchema = mongoose.Schema({
  Image: String,
  name: String,
  price: Number,
  discount: {
    type: Number,
    default: 0,
  },
  bgcolor: String,
  panelcolor: String,
  textcolor: String,
});
module.exports = mongoose.model("product", productSchema);
