const express = require('express');
const mongoose = require('mongoose');
const router = express.Router()

const Model = require('../models/model');

module.exports = router;
router.route('/deliverys/')
//Get all Method
    .get(async (req, res) => {
    try{
        const data = await Model.Data.find({"DeliveryMan": null, "Statuts": 2});
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get by Id Method
router.route('/deliverys/:id')
    .get(async (req, res) => {
    try{
        const data = await Model.Data.find({_id: req.params.id, "DeliveryMan": null, "Statuts": 2});
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})