const Book = require("../model/Book");



const getAllBooks = async (req, res, next) => {
  let books;
  try {
    books = await Book.find();
  } catch (err) {
    console.log(err);
  }

  if(!books) {
    return res.status(404).json({ message: "No Book found" });
  }
  return res.status(200).json({ books });
};


const getBookById = async (req, res, next) => {
  const id = req.params.id;
  let book;
  try {
    book = await Book.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!book) {
    return res.status(404).json({ message: "No Book found" });
  }
  return res.status(200).json({ book });
};


const addBook = async (req, res, next) => {
  const { title, author, description, price, date, image } = req.body;
  let book;
  try {
    book = new Book({
      title,
      author,
      description,
      price,
      date,
      image,
    });
    await book.save();
  } catch (err) {
    console.log(err);
  }

  if (!book) {
    return res.status(500).json({ message: "Unable to Add to the DB" });
  }
  return res.status(201).json({ book });
};


const updateBook = async (req, res, next) => {
  const id = req.params.id;
  const { title, author, description, price, date, image } = req.body;
  let book;
  try {
    book = await Book.findByIdAndUpdate(id, {
      title,
      author,
      description,
      price,
      date,
      image,
    });
    book = await book.save();
  } catch (err) {
    console.log(err);
  }
  if (!book) {
    return res.status(404).json({ message: "Unable to Update this book" });
  }
  return res.status(200).json({ book });
};


const deleteBook = async (req, res, next) => {
  const id = req.params.id;
  let book;
  try {
    book = await Book.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }
  if (!book) {
    return res.status(404).json({ message: "Unable to Delete this book!" });
  }
  return res.status(200).json({ message: "Book successfully deleted" });
};


exports.getAllBooks = getAllBooks;
exports.addBook = addBook;
exports.getBookById = getBookById;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;
