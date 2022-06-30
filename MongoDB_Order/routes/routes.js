const express = require('express');
const mongoose = require('mongoose');
const router = express.Router()

const Model = require('../models/model');

function getUpdatedData(body){
    let p = {};
    for (let key in body) {
        if (body.hasOwnProperty(key)) {
            p[key.charAt(0).toUpperCase() + key.substring(1)] = body[key];
        }
    }
    return p;
}

module.exports = router;

// add timestamps in front of log messages
require('console-stamp')(console, '[HH:MM:ss.l]');
router.use((request, response, next) => {
    console.log(`${request.method} ${request.url} - ${request.ip}`);
    next();
});

router.route('/orders/')
//Post Method
    .post(async (req, res) => {
        console.log(req.body);
    try {
        const data = new Model.Data({
            Client: req.body.client,
            Products: req.body.products,
            Restaurant: {"id": req.body.restaurantSql,
                        "ObjectId": req.body.restaurantMongo},
            Price: req.body.price,
            DeliveryAddress: req.body.deliveryAddress,
            BillingAddress: req.body.billingAddress
        })

        await data.save()

        res.status(200).json(data)
    }
    catch (error) {
        console.log(error.message);
        res.status(400).json({ message: error.message })
    }
})

//Get all Method
    .get(async (req, res) => {
    try{
        const data = await Model.Data.find();
        res.json(data)
    }
    catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

//Get by Id Method
router.route('/orders/:id')
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

//Update by ID Method
    .put(async (req, res, next) => {
        console.log(req.body);
    try {
        const id = req.params.id;
        const updatedData = getUpdatedData(req.body);
        const options = { new: true };

        const result = await Model.Data.findByIdAndUpdate(
            id, {'$set': updatedData}, options
        )

        res.send(result)
    }
    catch (error) {
        console.log(error.message);
        res.status(400).json({ message: error.message })
    }
})
