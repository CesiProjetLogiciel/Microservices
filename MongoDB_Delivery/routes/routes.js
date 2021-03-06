const express = require('express');
const mongoose = require('mongoose');
const router = express.Router()

const Model = require('../models/model');

module.exports = router;

// add timestamps in front of log messages
require('console-stamp')(console, '[HH:MM:ss.l]');
router.use((request, response, next) => {
    console.log(`${request.method} ${request.url} - ${request.ip}`);
    next();
});

router.route('/deliveries/')
//Get all Method
    .get(async (req, res) => {
    try{
        const data = await Model.Data.find({Status: {$in: [2, 3, 4]}});
        console.log(data)
        res.json(data)
    }
    catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

//Get by Id Method
router.route('/deliveries/:id')
    .get(async (req, res) => {
    try{
        const data = await Model.Data.find({_id: req.params.id});
        res.json(data)
    }
    catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})