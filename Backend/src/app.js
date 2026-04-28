const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const router = require("./routes/auth.routes");
const path = require("path");

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

app.use("/api/auth", router);

module.exports = app;
