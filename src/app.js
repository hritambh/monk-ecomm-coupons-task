require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");

const app = express();
connectDB();

app.use(bodyParser.json());

// Routes
// app.use("/api/coupons", require("./routes/coupons"));

const PORT = process.env.MONK_PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));