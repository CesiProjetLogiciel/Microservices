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
    Prix: {
        required: true,
        type: Number
    }
});

const dataSchemaMenu = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    Product: {
        required: true,
        type: [dataSchemaProduct]
    },
    Prix: {
        required: true,
        type: Number
    },
    description: {
        required: false,
        type: String
    }
});

const dataSchemaRestaurant = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    description: {
        required: false,
        type: String
    },
    Categorie: {
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