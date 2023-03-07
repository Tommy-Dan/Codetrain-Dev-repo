const express = require('express');
const router = express.Router();
const { createAccount, listBookAccount} = require('../controllers/Account');
const { body } = require('express-validator');


router.post("/book", [
    body("title").trim().not().isEmpty().withMessage("Book title field cannot be empty").isAlpha(),
    body("author").trim().not().isEmpty().withMessage("Book author field cannot be empty").isAlpha(),
    body("description").trim().not().isEmpty().withMessage("Book description field cannot be empty").isAlpha(),
    body("date").trim().not().isEmpty().withMessage("Date field cannot be empty").isAlpha(),
], createAccount);

router.get("/book", listBookAccount);


module.exports = router;