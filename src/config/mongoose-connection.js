const mongoose = require("mongoose");
const config = require("config");

const dbgr = require("debug")("development:mongoose");
mongoose
  .connect(`${config.get("MONGODB_URI")}/shortecomerce`)
  .then(function () {
    dbgr("mongodb connected");
  })
  .catch(function (err) {
    console.log(err);
  });
module.exports = mongoose.connection;

// in ternmal write set DEBUG=development:*

//then in terminal set NODE_ENV=deveopment
// and if u want to proudction
// then in terminal set NODE_ENV=production
