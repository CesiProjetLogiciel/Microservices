const mongoose = require('mongoose');

const dataSchemaProduit = new mongoose.Schema({
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
    Produits: {
        required: true,
        type: [dataSchemaProduit]
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
        required: true,
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

    Produit: [dataSchemaProduit]
    ,
    Menu: [dataSchemaProduit]
});

module.exports = mongoose.model('Data', dataSchemaRestaurant)