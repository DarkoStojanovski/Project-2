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

router.delete("/:id",(req, res) => {
    console.log(req.body);
    
    db.Userjoke.destroy({where: {id: parseInt(req.params.id) }}).then( newJoke => {
        console.log(newJoke);
        res.redirect("/");   
    });
});
module.exports = router;