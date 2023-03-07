const bcrypt = require("bcrypt");
const User = require("../model/User");



const signup = (req, res) => {
    // hash the password
    bcrypt.hash(req.body.password, 10).then((hashedPassword) => {
        const user = new User({
            name: req.body.name,
            email: req.email.email,
            password: req.password.password,
        });
        // save the new user
        user.save()

        // return success if the new user is added successfully
        .then((result) => {
            res.status(201).send({msg: "User created successfully", result});
        })
        // catch error if the new user wasn't added successfully
        .catch((err) => {
            res.status(500).send({msg: "Error creating user", err});
        });
    })
    // catch error if the password hash isn't successful
    .catch((e) => {
        res.status(500).send({msg: "Password was not hashed successfully", e});
    });
};

exports.signup = signup;


