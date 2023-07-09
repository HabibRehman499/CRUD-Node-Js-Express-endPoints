import express from "express";
import mongoose from "mongoose";
import router from "./router/router.js";
import studentRouter from "./router/studentRouter.js";
import logger from "morgan";

const app = express();

const port = process.env.port || 3000;

const dbUrl =
  "mongodb+srv://habib:habib@nodeblog.dw24v2t.mongodb.net/?retryWrites=true&w=majority";

//  Connect to Mongo Altas
mongoose
  .connect(dbUrl)
  .then((result) => {
    app.listen(port, () => {
      console.log(`Listenning on Port ${port}`);
    });
    console.log("Connected to Database");
  })
  .catch((err) => {
    console.log(err);
  });

// Middleware
// app.use(express.static('public')); // used external css/images/etc
app.use(express.json()); // used to get json data
app.use(express.urlencoded({ extended: true })); // to get the form data
app.use(logger("dev")); // logger

//  Routes
app.use("/", router);
app.use("/student", studentRouter);

// Default MIddleware
app.use((req, res) => {
  res.status(404).send("404"); // Using ejs
});
