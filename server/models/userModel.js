const mongoose = require("mongoose");

const userModel = mongoose.Schema({
  accountNumber: {
    type: String,
    required: true,
    trim: true
  }
});

module.exports = mongoose.model("User", userModel);
