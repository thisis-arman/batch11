const Registration = require("../models/Registration");

const generateRegId = async () => {
  const count = await Registration.countDocuments();
  return `FWL-2026-${String(count + 1).padStart(3, "0")}`;
};

exports.registerUser = async (req, res) => {
  try {
    const { name, studentId, phone, bkashTxId } = req.body;

    if (!name || !studentId || !phone || !bkashTxId) {
      return res.status(400).json({ message: "সব তথ্য আবশ্যক" });
    }

    const registrationId = await generateRegId();

    const newReg = new Registration({
      name,
      studentId,
      phone,
      bkashTxId,
      registrationId,
      photo: req.file?.path
    });

    await newReg.save();

    res.status(201).json({
      message: "রেজিস্ট্রেশন সফল",
      registrationId
    });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};
