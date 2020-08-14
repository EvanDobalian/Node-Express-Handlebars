const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js');

router.get('/', (req,res) => {
    burger.selectAll(data => {
        const hbsObject = {
            burgers: data
          };
          res.render("index", hbsObject);
    });
});

router.post('/burger', (req, res) => {
    console.log(req.body);
    burger.insertOne(req.body.burger_name, () => {
        res.redirect('/');
    });
});

router.put('/burger/:id', (req, res) => {
    burger.updateOne(req.params.id, () => {
        res.redirect('/');
    })
})

module.exports = router;