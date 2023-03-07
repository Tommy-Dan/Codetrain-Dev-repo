const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const userModel = require('../models/User');
const { signUpController, signInController } = require('../controllers/User');


router.put("/signup", [
    body("name").trim().not().isEmpty().withMessage("enter user name!"),
    body("email").isEmail().withMessage("provide your user email!").custom((value, {req}) => {
        return userModel.findOne({email: value}).then(userDoc => {
            if(userDoc)
            return Promise.reject("email already exist");
        })
    }),
    body("password").trim().isLength({min: 6, max: 18})
], signUpController);

router.post("/signin", [
    body("email").isEmail().withMessage("email is invalid"),
    body("password").trim().isLength({min: 6, max: 18})
], signInController);

 module.exports = router;