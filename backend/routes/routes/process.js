// backend/routes/process.js
const express = require("express");
const { startSession } = require("../controllers/processControllers");
const protect = require("../config/auth");

const router = express.Router();

router.post("/start", protect, startSession);

module.exports = router;
