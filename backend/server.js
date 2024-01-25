const express = require("express");
const connectDB = require("./config/db");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const port = 5000;

dotenv.config();
connectDB();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", require("./routes/users.routes"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
