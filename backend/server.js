const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.static("frontend"))
app.use(cors());
app.use(express.json());

// Connect to MongoDB (Local)
mongoose.connect("mongodb://127.0.0.1:27017/portfolio")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Schema
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  message: String
});

const Contact = mongoose.model("Contact", contactSchema);

// Route to save data
app.post("/api/contact", async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.json({ message: "Data Saved to MongoDB" });
  } catch (error) {
    res.status(500).json({ error: "Error saving data" });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});





