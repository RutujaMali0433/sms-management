// backend/config/auth.js
const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
  let token = req.headers.authorization;
  if (token && token.startsWith("Bearer")) {
    try {
      token = token.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      next();
    } catch (error) {
      res.status(401).json({ message: "Not authorized, token failed" });
    }
  } else {
    res.status(401).json({ message: "No token provided" });
  }
};

module.exports = protect;

// backend/routes/auth.js
const express = require("express");
const { register, login } = require("../controllers/authControllers");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

module.exports = router;

