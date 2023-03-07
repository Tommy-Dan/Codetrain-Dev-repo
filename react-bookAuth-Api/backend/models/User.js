const mongoose = require('mongoose');




const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    accounts: [
        {id: {
            type: Schema.Types.ObjectId,
            ref: "bookAccount"
        }}
    ]
});

module.exports = mongoose.model("User", userSchema);