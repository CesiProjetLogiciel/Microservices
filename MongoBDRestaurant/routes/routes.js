const express = require('express');

const router = express.Router()

const Model = require('../models/model');

module.exports = router;

//Post Method
router.route('/restaurants')
    .post(async (req, res) => {
    const data = new Model({
        name: req.body.name,
        description: req.body.description,
        Category: req.body.Category,
        Image: req.body.Image,
        Product: req.body.Product,
        Menu: req.body.Menu
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})
    .get(async (req, res) => {
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get by Id Method
router.route('/restaurants/:id')
    .get(async (req, res) => {
    try{
        const data = await Model.find({_id: req.params.id});
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
    .put(async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})
    .delete(async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send([])
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})