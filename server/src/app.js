const express = require("express");
const cors = require("cors");

const registrationRoutes = require("./routes/registration.routes");
const adminRoutes = require("./routes/admin.routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.use("/api", registrationRoutes);
app.use("/api/admin", adminRoutes);

module.exports = app;
