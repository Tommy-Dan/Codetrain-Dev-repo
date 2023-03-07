const accountModel = require('../models/Account');
const { validationResult } = require('express-validator');


// const createAccount = (req, res) => {
//     const errors = validationResult(req);
//     if(!errors.isEmpty()){
//         console.log(errors)
//         return res.json({message: errors.array()[0].msg});
//     }
//     const { ISBN, title, author, description, date } = req.body;
//     const bookAcount = new accountModel({ ISBN, title, author, description, date });

//     bookAcount.save().then(result => {
//         if(result){
//             res.json({message: "Book account created", data: result})
//         }
//         else{
//             res.json({message: "Failed to create book account"})
//         }
//     })
// }

const createAccount = async (req, res, next) => {
    const { ISBN, title, author, description, date } = req.body;
    let account;
    try {
      account = new accountModel({
        title,
        author,
        description,
        date,
        ISBN
      });
      await account.save();
    } catch (err) {
      console.log(err);
    }
  
    if (!account) {
      return res.status(500).json({ message: "Unable to Add to the DB" });
    }
    return res.status(201).json({ account });
  };

const listBookAccount = (req, res) => {
    accountModel.find().populate('ISBN', 'title author description date -_id').then(result => {
        res.json({data: result});
    }).catch(err => console.log(err));
}

module.exports = {
    createAccount,
    listBookAccount
}