const express = require('express');
const {listBanksController, 
       createBankController, 
       updateBankController, 
       deleteBankController
      } = require('../controllers/banks');
const router = express.Router();


//Bank Routes
    // view banks - get method
    router.get('/banks/:id?', listBanksController);

    
    // create bank - post method
    router.post('/bank', createBankController);
    
    // update bank - put/patch method
    router.put('/bank', updateBankController);
    
    // delete bank - delete method
    router.delete('/bank', deleteBankController);

    module.exports = router;