const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const books = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: String,
  image: String,
  link: { type: String, required: true }
});

const Book = mongoose.model("Book", books);

module.exports = Book;
