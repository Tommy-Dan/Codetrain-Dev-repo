const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();



// Middlewares
app.use(express.json());
app.use(cors());
app.use("/books", router);

mongoose.connect("mongodb+srv://bookUser:bookUser12345@cluster0.u1gvbmg.mongodb.net/bookStore?retryWrites=true&w=majority")
  .then(() => console.log("Connected To Database"))
  .then(() => {app.listen(4000);
  }).catch((err) => console.log(err));
