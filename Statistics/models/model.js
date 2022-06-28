const mongoose = require('mongoose');

const dataSchemaStatsRestaurants = new mongoose.Schema({
    restaurant: {
        required: true,
        type: Number
    },
    stats: {
        required: false,
        type: [Number]
    }
})

const dataSchemaStatsSales = new mongoose.Schema({
    type: {
        required: true,
        type: String,
        default: "Sales"
    },
    stats: {
        required: false,
        type: [Number]
    }
})

const dataSchemaStatsPerformance = new mongoose.Schema({
    type: {
        required: true,
        type: String,
        default: "Performance"
    },
    stats: {
        required: false,
        type: [Number]
    }
})

module.exports = {
    Data: mongoose.model('Data', dataSchemaStatsRestaurants,'stats'),
    DataSales: mongoose.model('DataSales', dataSchemaStatsSales,'stats'),
    DataPerformance: mongoose.model('DataPerformance', dataSchemaStatsPerformance,'stats')
}