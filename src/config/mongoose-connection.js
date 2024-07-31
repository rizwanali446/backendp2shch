const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/shortecomerce")
  .then(function () {
    console.log("mongodb connected");
  })
  .catch(function (err) {
    console.log(err);
  });
module.exports = mongoose.connection;
