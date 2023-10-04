const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
mongoose.set("strictQuery", false);
const Email = require("./models/emailModel");
const User = require("./models/userModel");
require("dotenv").config();

const PORT = 3000;
const MONGO_URI = process.env.MONGO_DB_URI;

// CONNECT TO DATABASE
mongoose.connect(MONGO_URI, { useNewUrlParser: true }, () =>
  console.log(`MongoDB connected...`)
);

// START THE APP
const app = express();

// MIDDLE-WARE
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // ensure we can parse the URL parameters correctly
app.use(cors());

// ROUTES
app.get("/emails", async (req, res) => {
  try {
    const emails = await Email.find();
    res.status(200).json(emails);
  } catch (error) {
    res.status(404).json({ message: error });
  }
});

app.post("/emails/:email", async (req, res) => {
  const email_param = req.params.email;

  try {
    const email = await Email.create({ email: email_param });
    email.save();

    res.status(202).send(`Sucessfully saved email ${email}`);
  } catch (error) {
    res.status(404).json({ message: error });
  }
});

app.get("/users/login/:accountNumber", async (req, res) => {
  const accountNumber = req.params.accountNumber;

  try {
    const user = await User.find({ accountNumber: accountNumber });

    if (user.length == 0) {
      res.status(401).json({
        message: `No user associated with account number: ${accountNumber}`
      });
    } else {
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(404).json({ message: error });
  }
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}...`));
