const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Server is running on 80...");
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok fine" });
});

const PORT = 80;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = app; // IMPORTANT for testing
