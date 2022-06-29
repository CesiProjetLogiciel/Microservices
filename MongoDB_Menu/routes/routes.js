const express = require('express');
const mongoose = require('mongoose');

const router = express.Router()

const Model = require('../models/model');

function getUpdatedData(body){
    let p = {};
    for (let key in body) {
        if (body.hasOwnProperty(key)) {
            p['Menu.$.'+String(key)] = body[key];
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

router.route('/restaurants/:id/menus')
//Post Method
    .post(async (req, res) => {
        console.log(req.body);
        try {
            const data = new Model.Data({
                name: req.body.name,
                Price: req.body.price,
                description: req.body.description
            })
            const options = { new: true };
            
            var result = await Model.Data.findByIdAndUpdate(
                req.params.id, {$push: {Menu: data}}, options
            )
            
            res.send(result)
        }
        catch (error) {
            res.status(400).json({ message: error.message })
        }
    })

//Get all Method
    .get(async (req, res) => {
        try{
            const data = await Model.Data.find({"_id": req.params.id}).select('Menu').lean();
            res.json(data[0].Menu)
        }
        catch(error){
            res.status(500).json({message: error.message})
        }
    })

//Get by Id Method
router.route('/restaurants/:id/menus/:idmenu')
    .get(async (req, res) => {
        try{
            var data = await Model.Data.find({"_id": req.params.id}).select('Menu').lean();
            var data2 = data[0].Menu.find(element => element._id==req.params.idmenu);
            res.json(data2)
        }
        catch(error){
            res.status(500).json({message: error.message})
        }
    })

//Update by ID Method
    .put(async (req, res, next) => {
        console.log(req.body);
        try {
            const id = req.params.id;
            const idmenu = req.params.idmenu;
            const updatedData = getUpdatedData(req.body);
            const options = { new: true };

            const result = await Model.Data.updateOne({"_id": id, "Menu._id": idmenu}, {"$set": updatedData});

            res.json(result);
        }
        catch (error) {
            res.status(400).json({ message: error.message })
        }
    })


//Delete by ID Method
    .delete(async (req, res) => {
        try {
            const id = req.params.id;
            const idmenu = req.params.idmenu;
            const data = await Model.Data.updateOne({_id: id}, {$pull: {Menu:{_id:idmenu}}})
            res.send([])
        }
        catch (error) {
            res.status(400).json({ message: error.message })
        }
    })

//Product in Menu methods 
    router.route('/restaurants/:id/menus/:idmenu/products')

//Update by ID Method
    .post(async (req, res, next) => {
        console.log(req.body);
        try {
            const id = req.params.id;
            const idmenu = req.params.idmenu;
            const options = { new: true };

            const result = await Model.Data.updateOne({_id: id, "Menu._id": idmenu}, {$push: {"Menu.$.Product": req.body.Product}});

            res.json(result);
        }
        catch (error) {
            res.status(400).json({ message: error.message })
        }
    })


//Delete by ID Method
router.route('/restaurants/:id/menus/:idmenu/products/:idproduct')
    .delete(async (req, res) => {
        try {
            const id = req.params.id;
            const idmenu = req.params.idmenu;
            const options = { new: true };

            const result = await Model.Data.updateOne({_id: id, "Menu._id": idmenu}, {$pull: {"Menu.$.Product": req.params.idproduct}});

            res.send([])
        }
        catch (error) {
            res.status(400).json({ message: error.message })
        }
    })