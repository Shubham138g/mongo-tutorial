const express = require("express");
// const dotenv=require("dotenv");
const app = express();
const port = 3000;

//middelware

const middleware = (req, res, next) => {
  console.log(`hello my middleware`);
  next();
}

// middleware();

//routes
app.get("/", (req, res) => {
  res.send("hello from home page")
})

app.get("/about", middleware, (req, res) => {
  console.log(`hello my about page`)
  res.send("hello from about page")
})

app.get("/contact", (req, res) => {
  res.send("hello from contact page")
})
app.get("/signin", (req, res) => {
  res.send("hello from signin page")
})
app.get("/signup", (req, res) => {
  res.send("hello from signup page")
})


//listening to port number 3000
app.listen(3000, () => {
  console.log(`Express server listening on port ${port}`);
});

const mongoose = require("mongoose");


mongoose
  .connect("mongodb+srv://tonygupta275:zoAcRqDwTeldGSC2@cluster0.6efrmtj.mongodb.net/")
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));
