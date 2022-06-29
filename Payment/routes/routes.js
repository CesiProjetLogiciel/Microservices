const express = require('express');
const mongoose = require('mongoose');
const router = express.Router()

const Model = require('../models/model');

module.exports = router;

// add timestamps in front of log messages
require('console-stamp')(console, '[HH:MM:ss.l]');
router.use((request, response, next) => {
    console.log(`${request.method} ${request.url} - ${request.ip}`);
    next();
});

router.route('/payment/')
//Payment validation
    .get(async (req, res) => {
    
    res.json(true)

})

