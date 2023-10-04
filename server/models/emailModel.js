const mongoose = require("mongoose");

const emailModel = mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true
  }
});

module.exports = mongoose.model("Email", emailModel);
