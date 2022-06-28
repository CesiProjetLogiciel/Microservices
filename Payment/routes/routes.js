const express = require('express');
const mongoose = require('mongoose');
const router = express.Router()

const Model = require('../models/model');

module.exports = router;
router.route('/payment/')
//Payment validation
    .get(async (req, res) => {
    
    res.json(true)

})

