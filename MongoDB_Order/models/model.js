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

const dataSchemaOrder = new mongoose.Schema({
    Status: {
        type: Number,
        default: 1
    },
    Client: {
        type: Number,
        required: true
    },
    DeliveryMan: {
        type: Number,
        required: false,
        default: null
    },
    Products:[{
            type: mongoose.Types.ObjectId, ref:"Restaurant.Product"
    }],
    Restaurant:
    {
        "id": Number,
        "ObjectId":{type: mongoose.Schema.ObjectId, ref: "Restaurant"}
    },
    Price:
    {
        type: Number
    },
    DeliveryAddress:
    {
        type: Number,
        required: true
    },
    BillingAddress:
    {
        type: Number,
        required: true
    }
})

module.exports = {
    Data: mongoose.model('Data', dataSchemaOrder,'orders'),
    Product: mongoose.model('Product', dataSchemaProduct,'datas'),
    Restaurant: mongoose.model('Restaurant', dataSchemaRestaurant,'datas'),
    Menu: mongoose.model('Menu', dataSchemaMenu,'datas')
}