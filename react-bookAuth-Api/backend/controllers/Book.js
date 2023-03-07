const { validationResult } = require('express-validator');
const Book = require('../models/Book');
// const accountModel =require('../models/accountModel');



                // Controllers
// Add book to the database
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
// const addBook = (req, res) => {
//     const errors = validationResult(req);
//     if(!errors.isEmpty()){
//         console.log(errors)
//         return res.json({
//             message: errors.array()[0].msg
//         });
//     }
//     const { title, author, description, price, date, image } = req.body;
//     let book = new Book({ title, author, description, price, date, image });
//     book.save().then(result => {
//         res.json({message: "Book add successfully to the db", data: result});
//     }).catch(err => console.log(err));
// }

// Get all books from the database
const getAllBooks = (req, res) => {
    const {id} = req.params;
    if(id){
        Book.find({_id}).then(books => {
            res.json({data: books});
        }).catch(err => console.log(err));
    }
    else{
        Book.find().then(books => {
            res.json({data: books});
        }).catch(err => console.log(err));
    }
}

// Update edited book in the db
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

// Delete book from the db using id
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

module.exports= {
    addBook,
    getAllBooks,
    updateBook,
    deleteBook
}