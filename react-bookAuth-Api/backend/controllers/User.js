const userModel = require('../models/User');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const signUpController = (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        console.log(errors);
        return res.json({message: errors.array()[0].msg});
    }
    const {name, email, password} = req.body;
    bcrypt.hash(password, 6).then(hashedPassword => {
        const user = new userModel({ name, email, password: hashedPassword});
        user.save().then(user => {
            res.json({message: "Signup successful", data: {
                      name: user.name, 
                      email: user.email
                     }
            });
        }).catch(err => console.log(err));
    }).catch(err => console.log(err))
}


const signInController = async(req, res) => {
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.json({message: errors.array()[0].msg});
        }
        const {email, password} = req.body;

        // Find user
        const user = await userModel.findOne({email});
        if(!user){
            return res.json({message: "User not found"});
        }
        const isAuth = await bcrypt.compare(password, user.password);

        if(!isAuth){
            return res.json({message: "email and password combination is incorrect"})
        }
        const token = jwt.sign({
            name: user.name, email: user.email, userId: user._id
        }, "supersecretkeythatcannotbeeasilyguessed", {expiresIn: "1h"});
        return res.json({message: "User signed in successfully", token})
    } catch (error) {
        res.json({message: "Server error please try again!"})
    }
}

module.exports = {
    signUpController,
    signInController
}