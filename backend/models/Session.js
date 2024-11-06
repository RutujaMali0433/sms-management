// backend/models/Session.js
const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({
  programName: String,
  country: String,
  operator: String,
  status: { type: String, enum: ["active", "inactive"], default: "inactive" },
});

module.exports = mongoose.model("Session", sessionSchema);
