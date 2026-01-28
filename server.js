const express = require("express");
const app = express();


app.use("/health", (req, res) => {
  res.status(200).send("Server is healthy and wealthy");
});

app.use("/collage", (req, res) => {
  res.status(200).send("your are at collage route");
});

app.use("/", (req, res) => {
  res.status(200).send("Server is running on 3000....");
});
const PORT = 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = app; // IMPORTANT for testing
//update 3
