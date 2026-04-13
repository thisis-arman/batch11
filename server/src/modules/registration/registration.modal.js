const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema({
  name: String,
  studentId: String,
  phone: String,
  email:String,
  bkashTxId: String,
  amount: { type: Number, default: 1200 },
  photo: String,
  registrationId: String,
  isVerified: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Registration", registrationSchema);
