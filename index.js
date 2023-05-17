const express = require("express");
const app = express();
var path = require("path");
const colors = require("colors");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });
var cors = require("cors");
app.use(cors());
const connectDb = require("./config/db");
const errorHandler = require("./middleware/errorHandler");
var bodyParser = require("body-parser");
app.use(express.json({ limit: "50mb" }));

app.use(bodyParser.json({ limit: "500mb" }));
app.use(bodyParser.urlencoded({ limit: "500mb", extended: true }));
//routes
const CourseRoute = require("./routes/course.routes");
//routes
connectDb();
//
app.get("/", async (req, res, next) => {
  res
    .status(200)
    .send({ port: process.env.PORT, mongodb: process.env.MONGODB_URI });
});
//
app.use("/api/course", CourseRoute);
app.use(errorHandler);
const server = app.listen(3000, () => {
  console.log(`server ${process.env.PORT} port дээр аслаа`.rainbow);
});
process.on("unhandledRejection", (err, promise) => {
  console.log(`алдаа гар  лаа : ${err.message}`.red.underline.red.bold);
  server.close(() => {
    process.exit(1);
  });
});
