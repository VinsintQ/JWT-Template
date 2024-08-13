const dotenv = require("dotenv");
dotenv.config();
require("./config/database.js");
const morgan = require("morgan");
const express = require("express");
const testJWTRouter = require("./controllers/test-jwt");
const usersRouter = require("./controllers/users");
const app = express();
app.use(morgan("dev"));
const PORT = process.env.PORT || 3000;
app.use(express.json());

// Routes
app.use("/test-jwt", testJWTRouter);
app.use("/users", usersRouter);
app.listen(PORT, () => {
  console.log("The express app is ready!");
});
