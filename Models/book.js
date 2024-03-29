const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  body: String,
  description: { type: String, required: true },
  image: { type: String, required: false },
  link: { type: String, required: false }
});

const Book = mongoose.model("book", bookSchema);

module.exports = Book;