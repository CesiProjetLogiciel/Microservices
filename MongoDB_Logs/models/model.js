const mongoose = require('mongoose');

const dataSchemaLogs = new mongoose.Schema({
    Logs: {
        required: true,
        type: String
    },
    Type: {
        required: true,
        type: String
    }
});

module.exports = {
    Data: mongoose.model('Data', dataSchemaLogs,'logs')
}