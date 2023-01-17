const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const UserRouter = require("./routes/userroutes.js");
const cors=require('cors')


mongoose.connect(
  "mongodb+srv://daniel:123@cluster0.t51gu.mongodb.net/AngularDB?retryWrites=true&w=majority",
  (err) => {
    if (err) {
      console.log("DB not connected!");
    } else {
      console.log("DB connected!")
    }
  }
);

const app = express();


app.use(bodyParser.json());
app.use(cors())
app.use("/users", UserRouter);


app.listen(2050, () => {
  console.log("listening on port 2050...");
});
