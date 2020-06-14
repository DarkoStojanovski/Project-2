const express = require('express');
const router = express.Router();
const db = require('../../models')

router.post("/", (req, res) => {
    console.log(req.body);
    
    db.Userjoke.create(req.body).then( newJoke => {
        console.log(newJoke);
        res.status(200);   
    });
});


module.exports = router;