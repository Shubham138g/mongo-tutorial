const dotenv = require("dotenv");
const express = require("express");
const app = express();
// const port = 3000;

dotenv.config({path: 'server/config.env'});
require('./db/conn');
// const mongoose = require("mongoose");
// const db= process.env.DATABASE;
const PORT= process.env.PORT;

// const db="mongodb+srv://tonygupta275:zoAcRqDwTeldGSC2@cluster0.6efrmtj.mongodb.net/";

// mongoose
//   .connect(db)
//   .then(() => console.log("DB connected"))
//   .catch((err) => console.log(err));




//middelware

const middleware = (req, res, next) => {
  console.log(`hello my middleware`);
  next();
}


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
app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
