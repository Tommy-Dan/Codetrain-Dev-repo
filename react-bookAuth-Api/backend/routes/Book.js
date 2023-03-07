const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const { addBook, getAllBooks, updateBook, deleteBook } = require('../controllers/Book');
const bookModel = require('../models/Book');


router.post("/bookcollection", [
    body("title").trim().not().isEmpty().withMessage("title field cannot be empty").isAlpha(),
    body("author").trim().not().isEmpty().withMessage("author field cannot be empty").isAlpha(),
    body("description").trim().not().isEmpty().withMessage("description field cannot be empty").isAlpha(),
    body("price").trim().not().isEmpty().withMessage("price field cannot be empty").isAlpha(),
    body("date").trim().not().isEmpty().withMessage("date field cannot be empty").isAlpha(),
    body("image").trim().not().isEmpty().withMessage("image field cannot be empty").isAlpha(),
], addBook);
router.get("/bookcollection/:id?", getAllBooks);
router.put("/bookcollection/:id", updateBook);
router.delete("/bookcollection/:id", deleteBook);


module.exports = router;