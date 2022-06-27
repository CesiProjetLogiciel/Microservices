require('dotenv').config()

const config = {
    server: process.env.DATABASE_URL,
    authentication: {
        type: 'default',
        options: {
            userName: process.env.LOGIN,
            password: process.env.PASSWORD,
        }
    },
    options: {
        port: 1433,
        database: 'cesieats',
        instanceName: 'SQLCESIEATS',
        rowCollectionOnDone: true,
        useColumnNames: false,
        trustServerCertificate: true
    }
};

module.exports = config;