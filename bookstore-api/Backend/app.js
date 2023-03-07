const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const User = require("./model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const auth = require("./auth");
const app = express();




// Middlewares
app.use(express.json());
app.use(cors());
// app.use("/register", router);
app.use("/books", router);


// register endpoint
app.post("/register", (req, res) => {
   // hash the password
  bcrypt.hash(req.body.password, 10)
  .then((hashedPassword) => {
  // create a new user instance and collect the data
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });
  // save the new user
  user.save()
  // return success if the new user is added
  .then((result) => {
    res.status(201).send({
      message: "User created successfully",
      result,
    });
  })
  // catch error if the new user wasn't added
  .catch((error) => {
    res.status(500).send({
      message: "Error creating user",
      error,
    });
  });
  })
  // catch error if the password hash isn't successful
  .catch((e) => {
    res.status(500).send({
      message: "Password was not hashed successfully",
      e,
    });
  });
});

// login endpoint
app.post("/login", (req, res) => {
  // check if email exist
  User.findOne({email: req.body.email })

  // if email exist
  .then((user) => {
    // compare the password entered and the hashed password
    bcrypt.compare(req.body.password, user.password)

    // if the passwords match
    .then((passwordCheck) => {

      // check if password matches
      if(!passwordCheck) {
        return res.status(400).send({
          message: "Passwords does not match",
          error,
        })
      }
      // create JWT token
      const token = jwt.sign({
        userId: user._id,
        userEmail: user.email,
      },
      "RANDOM-TOKEN",
      { expiresIn: "24h" }
      );
      // return success response
      res.status(200).send({
        message: "Login successfully",
        email: user.email,
        token,
      });
    })
    // catch error if password does not match
    .catch((error) => {
      res.status(400).send({
        message: "Password does not match",
        error,
      });
    });
  })
  .catch((e) => {
    res.status(404).send({
      message: "Email not found",
      e,
    });
  });
});

// free endpoint
app.get("/free-endpoint", (req, res) => {
  res.json({ message: "You are free to access me anytime"});
});

// authentication endpoint
app.get("/auth-endpoint", auth, (req, res) => {
  res.json({ message: "You are authorized to access me"});
});



mongoose.set('strictQuery', false);
mongoose.connect("mongodb+srv://bookUser:bookUser12345@cluster0.u1gvbmg.mongodb.net/bookStore?retryWrites=true&w=majority")
  .then(() => console.log("Connected To Database"))
  .then(() => {app.listen(4000);
  }).catch((err) => console.log(err));



// curb cores Error by adding a header here
app.use((req, res, next) =>{
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Request-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});
