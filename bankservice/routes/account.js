const express = require('express');
const { createAccountController, listAccountController } = require('../controllers/accounts');
const router = express.Router();

//Account Controllers

// create account - post method
router.post('/account', createAccountController);

// view accounts - with get method
router.get('/accounts/:id?', listAccountController);


module.exports = router;