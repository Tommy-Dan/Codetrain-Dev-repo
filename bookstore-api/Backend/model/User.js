const mongoose = require('mongoose');



const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: [true, "Please provide a valid email!"],
        unique: [true, "Email exist"],
    },
    password: {
    type: String,
    required: [true, "Please provide a password!"],
    unique: false,
    }
});

module.exports = mongoose.model("User", UserSchema);