const mongoose = require('mongoose');

const dataSchemaProduct = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String
    },
    Image: {
        required: false,
        type: String
    },
    Price: {
        required: true,
        type: Number
    }
});

const dataSchemaMenu = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    Products: {
        required: true,
        type: [dataSchemaProduct]
    },
    Price: {
        required: true,
        type: Number
    },
    description: {
        required: false,
        type: String
    }
});

const dataSchemaRestaurant = new mongoose.Schema({
    idSQl: {
        required: false,
        type: Number
    },
    name: {
        required: true,
        type: String
    },
    description: {
        required: false,
        type: String
    },
    Category: {
        required: true,
        type: String
    },
    Image: {
        required: false,
        type: String
    },

    Product: [dataSchemaProduct]
    ,
    Menu: [dataSchemaProduct]
});

module.exports = mongoose.model('Data', dataSchemaRestaurant)