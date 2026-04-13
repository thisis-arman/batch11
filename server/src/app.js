const express = require("express");
const cors = require("cors");
const router = require("./modules/routes");
const registrationModal = require("./modules/registration/registration.modal");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.use("/api", router);

app.get("/", (req, res) => {
   const data= registrationModal.find();
   console.log({data});
     res.status(201).json({
      data
    });
});

module.exports = app;
