const express = require('express');

const router = express.Router()

const Model = require('../models/model');

module.exports = router;

//Post Method
router.post('/restaurants', async (req, res) => {
    const data = new Model({
        id: req.body.id,
        name: req.body.name,
        description: req.body.description,
        Categorie: req.body.Categorie,
        Image: req.body.Image,
        Produit: req.body.Produit,
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

//Get all Method
router.get('/restaurants', async (req, res) => {
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get by Id Method
router.get('/restaurants/:id', async (req, res) => {
    try{
        const data = await Model.find({"id": req.params.id});
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Update by ID Method
router.patch('/restaurants/:id', async (req, res) => {
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

//Delete by ID Method
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})