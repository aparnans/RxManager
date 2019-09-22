const express = require("express");
const router = express.Router;

const dbObj = require('../models/allUsers');

module.exports = function(app){
router.get('/allUsers', (req, res) => {
    dbObj.findALL({
    }).then(data => {
        console.log('in findall');
        console.log(data);
        res.sendStatus(200);
    });
    res.json("data");
});

}