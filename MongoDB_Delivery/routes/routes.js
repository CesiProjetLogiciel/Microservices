const express = require('express');
const mongoose = require('mongoose');
const router = express.Router()

const Model = require('../models/model');

module.exports = router;
router.route('/deliveries/')
//Get all Method
    .get(async (req, res) => {
    try{
        const data = await Model.Data.find({"DeliveryMan": null, "Status": 2});
        res.json(data)
    }
    catch(error){
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
        res.status(500).json({message: error.message})
    }
})