const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/shortecomerce");
const ownerSchema = mongoose.Schema({});
module.exports = mongoose.model("owner", ownerSchema);
