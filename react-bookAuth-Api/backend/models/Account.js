const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookAccountSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: String,
  },
  ISBN: {
    type: Schema.Types.ObjectId,
    ref: "bookCollection",
    required: true
  },
});

module.exports = mongoose.model("bookAccount", bookAccountSchema);

