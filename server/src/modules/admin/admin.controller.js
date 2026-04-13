const Admin = require("../models/Admin");
const Registration = require("../models/Registration");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  const admin = await Admin.findOne({ email });
  if (!admin) return res.status(401).json({ message: "Invalid credentials" });

  const match = await bcrypt.compare(password, admin.password);
  if (!match) return res.status(401).json({ message: "Invalid credentials" });

  const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET);
  res.json({ token });
};

exports.getStats = async (_, res) => {
  const totalParticipants = await Registration.countDocuments();
  const totalAmount = totalParticipants * 1200;

  res.json({ totalParticipants, totalAmount });
};

exports.getRegistrations = async (_, res) => {
  const data = await Registration.find().sort({ createdAt: -1 });
  res.json(data);
};
