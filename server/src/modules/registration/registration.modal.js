const { Schema } = require("mongoose");


const registrationSchema = new Schema({
  name: String,
  studentId: String,
  phone: String,
  bkashTxId: String,
  amount: { type: Number, default: 800 },
  photo: String,
  registrationId: String,
  isVerified: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Registration", registrationSchema);
