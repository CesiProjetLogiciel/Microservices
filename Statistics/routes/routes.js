const express = require('express');
const mongoose = require('mongoose');
const router = express.Router()

const Model = require('../models/model');

module.exports = router;
router
//Post Method
    .get('/stats/restaurants/', async (req, res) => {
    try {
        const data = new Model.Data({
            restaurant: 18,
            stats: [16, 54, 8, 45, 84, 5, 14, 64]
        })

        res.status(200).json(data)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Get all Method
.get('/stats/sales/', async (req, res) => {
    try {
        const data = new Model.DataSales({
            stats: [14, 7, 17, 21 ,8, 5 ,7]
        })

        res.status(200).json(data)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

.get('/stats/performances/', async (req, res) => {
    try {
        const data = new Model.DataPerformance({
            stats: [0.54, 0.8, 0.7, 0.69, 0.51, 0.48]
        })

        res.status(200).json(data)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})