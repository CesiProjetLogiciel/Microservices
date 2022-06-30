const express = require('express');

const router = express.Router()

const Model = require('../models/model');

module.exports = router;

// add timestamps in front of log messages
require('console-stamp')(console, '[HH:MM:ss.l]');
router.use((request, response, next) => {
    console.log(`${request.method} ${request.url} - ${request.ip}`);
    next();
});

//Post Method
router.route('/restaurants')
    .post(async (req, res) => {
        console.log(req.body);
    const data = new Model({
        idSQL: req.body.idSQL,
        name: req.body.name,
        description: req.body.description,
        Category: req.body.Category,
        Image: req.body.Image,
        Product: req.body.Product,
        Menu: req.body.Menu
    })

    try {
        await data.save();
        res.send(data)
    }
    catch (error) {
        console.log(error.message);
        res.status(400).json({message: error.message})
    }
})
    .get(async (req, res) => {
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

//Get by Id Method
router.route('/restaurants/:id')
    .get(async (req, res) => {
    try{
        let data
        if (!isNaN(req.params.id))
            data = await Model.find({idSQL: req.params.id});
        else
            data = await Model.find({_id: req.params.id});
        res.json(data)
    }
    catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})
    .put(async (req, res) => {
        console.log(req.body);
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
        console.log(error.message);
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
        console.log(error.message);
        res.status(400).json({ message: error.message })
    }
})