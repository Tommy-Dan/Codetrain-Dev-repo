const UserModel = require('../models/user');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const signupController = (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        console.log(errors);
        return res.json({message: errors.array()[0].msg});
    }
    const {name, email, password } = req.body;

    bcrypt.hash(password, 7).then( hashedPassword => {
        const user = new UserModel({name, email, password: hashedPassword});
        user.save().then(user => {
            res.json({"message": "Signup is successful", "data": {name: user.name, email: user.email}});
        }).catch(err => console.log(err));
    }).catch(err => console.log(err));
};

const signinController = async (req, res) => {
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.json({message: errors.array()[0].msg});
        }
        const {email, password} = req.body;

        //Find user
        const user = await UserModel.findOne({email});
        if(!user){
            return res.json({message: "user not found"});
        }

        //Compare password
        const isAuth = await bcrypt.compare(password, user.password);
        if(!isAuth){
            return res.json({message: "Invalid email and password"});
        }
        const token = jwt.sign(
            {name: user.name, email: user.email, userId: user._id}, 
            "supersecretkeythatcannotbeeasilyguess",
            {expiresIn: "1hr"});
        return res.json({message: "user signed in", token})
        
    } catch (error) {
        res.json({message: "server error. please try again"});
    }
//     const errors = validationResult(req);
//     if(!errors.isEmpty()){
//         console.log(errors);
//         return res.json({message: errors.array()[0].msg})
//     }

//     const {email, password} = req.body;
//     //Find the user with email in the db
//     UserModel.findOne({email}).then(user => {
//         if(user){
//             //Compare password the inputed password to the one in db
//             bcrypt.compare(password, user.password).then( result => {
//                 //User Loggin
//                 if(result){
//                     return res.json({message: "user signed in"})
//                 }
//                 return res.json({message: "email and password incorrect"})

//             }).catch(err => {
//                 console.log(err);
//                 return res.json({message: "Failed to sign in. Please try again!"})
//             });
//         }else{
//             return res.json({message: "user not found"});
//         }

//     }).catch(err => {
//         console.log(err);
//         res.json({message: "server error. Please try again"})
//     });
}

module.exports = {
    signupController,
    signinController,
}