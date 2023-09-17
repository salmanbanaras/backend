const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const inventory = new Schema({

  productId: String,
  name: String,
  qty: String,
  time: Date,

});


module.exports = mongoose.model("inventory", inventory);
