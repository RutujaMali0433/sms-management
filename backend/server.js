// backend/server.js
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db").connectDB;
const mongoose = require('mongoose');

dotenv.config();

const app = express();
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/process", require("./routes/process"));

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("MongoDB connected...");
//   } catch (err) {
//     console.error(err.message);
//     process.exit(1); // Exit with failure
//   }
// };

module.exports = connectDB;

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
