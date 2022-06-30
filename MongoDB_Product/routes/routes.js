const express = require('express');

const router = express.Router()

const Model = require('../models/model');

function getUpdatedData(body){
    let p = {};
    for (let key in body) {
        if (body.hasOwnProperty(key)) {
            p['Product.$.'+String(key)] = body[key];
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

router.route('/restaurants/:id/products')
//Post Method
    .post(async (req, res) => {
        console.log(req.body)
    try {
        const data = new Model.Product({
            name: req.body.name,
            description: req.body.description,
            Price: req.body.Price,
            Image: req.body.Image
        })
        const options = { new: true };

        var resto = await Model.Data.findById(req.params.id);
        resto.Product.push(data);
        resto.save();
        let result = resto.Product[resto.Product.length-1]

        res.send(result)
    }
    catch (error) {
        console.log(error.message);
        res.status(400).json({ message: error.message })
    }
})

//Get all Method
    .get(async (req, res) => {
    try{
        const data = await Model.Data.find({"_id": req.params.id}).select('Product').lean();
        res.json(data[0].Product)
    }
    catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

//Get by Id Method
router.route('/restaurants/:id/products/:idproduct')
    .get(async (req, res) => {
    try{
        var data = await Model.Data.find({"_id": req.params.id}).select('Product').lean();
        var data2 = data[0].Product.find(element => element._id==req.params.idproduct);
        res.json(data2)
    }
    catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

//Update by ID Method
    .put(async (req, res, next) => {
        console.log(req.body)
    try {
        const id = req.params.id;
        const idproduct = req.params.idproduct;
        const updatedData = getUpdatedData(req.body);
        const options = { new: true };

        const result = await Model.Data.updateOne({"_id": id, "Product._id": idproduct}, {"$set": updatedData});

        res.json(result);
    }
    catch (error) {
        console.log(error.message);
        res.status(400).json({ message: error.message })
    }
})


//Delete by ID Method
    .delete(async (req, res) => {
    try {
        const id = req.params.id;
        const idproduct = req.params.idproduct;
        const data = await Model.Data.updateOne({_id: id}, {$pull: {Product:{_id:idproduct}}})
        res.send()
    }
    catch (error) {
        console.log(error.message);
        res.status(400).json({ message: error.message })
    }
})