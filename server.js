const express = require("express");
const app = express();


app.use("/health", (req, res) => {
  res.send("Server is healthy");
});

app.use("/collage", (req, res) => {
  res.send("your are at collage route");
});

app.use("/", (req, res) => {
  res.send("Server is running on 80....");
});
const PORT = 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = app; // IMPORTANT for testing
//update 3
