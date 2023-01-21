//Import Mongoose
const mongoose = require('mongoose');

//Create a new Bank Schema
const Schema = mongoose.Schema;
const BankSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    accountType: {
        type: String,
        required: true
    },
    accounts: [
        {
            accountId: {
                required: true,
                type: Schema.Types.ObjectId,
                ref: "Account"

            }
        }
    ]
});

const BankModel = mongoose.model("Bank", BankSchema);

module.exports = BankModel;