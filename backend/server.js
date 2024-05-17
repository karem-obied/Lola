const path = require("path");
const express = require("express");
const { errorHandler } = require("./middlewares/errorHandler");
const connectDB = require("./middlewares/connect");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8888;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(errorHandler);

app.use("/api/users", require("./routes/user"));

app.listen(PORT, () => console.log(`Server is Running on port ${PORT}`));
