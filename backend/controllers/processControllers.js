// backend/controllers/processController.js
const { exec } = require("child_process");

const executeCommand = (command) =>
  new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) reject(error);
      else resolve(stdout || stderr);
    });
  });

exports.startSession = async (req, res) => {
  const { programName, country, operator } = req.body;
  const sessionName = `${programName}_${country}_${operator}`;
  try {
    await executeCommand(`screen -S ${sessionName} -d -m`);
    res.json({ message: "Session started successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to start session" });
  }
};
