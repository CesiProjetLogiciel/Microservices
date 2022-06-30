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

router.route('/logs/connections')
//Post Method
    .post(async (req, res) => {
        console.log(req.body);
    try {
        const data = new Model.Data({
            Logs: req.body.logs,
            Type: "connections"
        })

        await data.save()

        res.send(data);
    }
    catch (error) {
        console.log(error.message);
        res.status(400).json({ message: error.message })
    }
})

//Get Method
    .get(async (req, res) => {
    try{
        const data = await Model.Data.find({"Type": "connections"});
        res.json(data)
    }
    catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

router.route('/logs/components')
//Post Method
    .post(async (req, res) => {
        console.log(req.body);
    try {
        const data = new Model.Data({
            Logs: req.body.logs,
            Type: "components"
        })

        const result = await data.save()

        res.status(200).json(result)
    }
    catch (error) {
        console.log(error.message);
        res.status(400).json({ message: error.message })
    }
})

//Get Method
    .get(async (req, res) => {
    try{
        const data = await Model.Data.find({"Type": "components"});
        res.json(data)
    }
    catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})
