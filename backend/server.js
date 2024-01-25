const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const path = require("path");
const port = 5000;

dotenv.config();
connectDB();

const app = express();

// app.use("/", require("./routes/users.routes"));
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "vues", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
