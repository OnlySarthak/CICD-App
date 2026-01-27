const express = require("express");
const app = express();


app.use("/health", (req, res) => {
  res.status(200).json({ status: "ok fine 80₹" });
});

app.use("/collage", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.use("/", (req, res) => {
  res.send("Server is running on 80....");
});
const PORT = 80;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = app; // IMPORTANT for testing
//update 3
