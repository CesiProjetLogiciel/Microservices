const config = {
    server: 'DESKTOP-LQN9T82',
    authentication: {
        type: 'default',
        options: {
            userName: 'app generic',
            password: 'app generic',
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