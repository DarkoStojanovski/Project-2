const express = require('express');
const router = express.Router();
const db = require('../../models')

router.post("/", (req, res) => {
    db.Userjoke.create(req.body).then( newJoke => {
        console.log(newJoke);
        res.status(200);   
    });
});
