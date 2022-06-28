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
    Product: {
        type: [{
            type: mongoose.Schema.ObjectId, ref: 'Data.Product'
        }]
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
    Menu: [dataSchemaMenu]
});

module.exports = {
    Data: mongoose.model('Data', dataSchemaRestaurant), 
    Product: mongoose.model('Product', dataSchemaProduct),
    Menu: mongoose.model('Menu', dataSchemaMenu)
}