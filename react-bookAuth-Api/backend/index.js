const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
// const bookModal = require('./models/book');
const accountRoute = require('./routes/Account');
const bookRoute = require('./routes/Book');
const userRoute = require('./routes/User');


const server = express();
const handleError = (req, res, next) => {
    console.log('Error executed');
    next();
}


// We use bodyParser to retrive the infomation on user(s) in the db jformat
server.use(bodyParser.json());
server.use(cors());


// We routes through books accounts and users
server.use(bookRoute);
server.use(userRoute);
server.use(accountRoute);
server.get('*', handleError, (req, res) => {
    res.send("Error 404! Page not fount")
})


// We create a connection and connect to the mongo db
mongoose.set('strictQuery', false);
mongoose.connect("mongodb+srv://bookUser:bookUser12345@cluster0.u1gvbmg.mongodb.net/bookStore?retryWrites=true&w=majority").then(result =>{
    server.listen(4000, "localhost", () => {
        console.log("Connected To Database")
    });
}).catch(err => console.log(err));
  

