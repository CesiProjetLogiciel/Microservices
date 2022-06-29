const  config = require('./dbconfig');
const  sql = require('mssql');
const fs = require('fs');

function getQuery(sqlFile){
    try {
        const data = fs.readFileSync(sqlFile, 'utf8');
        return data;
    } catch (err) {
        console.error(err);
        return []
    }
}

async  function  getPaypals(params) {
    try {
        console.log(params)
        let  pool = await  sql.connect(config);
        let  paypals = await  pool.request()
            .input('idUsers', sql.Int, params.idUsers)
            .query(getQuery('./sql/getPaypals.sql'));
        return  paypals.recordsets;
    }
    catch (error) {
        console.log(error);
        return []
    }
}

async  function  getPaypal(paypalId) {
    try {
        let  pool = await  sql.connect(config);
        let  paypal = await  pool.request()
            .input('paypalId', sql.Int, paypalId)
            .query(getQuery("./sql/getPaypal.sql"));
        return  paypal.recordsets[0];
    }
    catch (error) {
        console.log(error);
        return []
    }
}

async  function  deletePaypal(paypalId) {
    try {
        let  pool = await  sql.connect(config);
        let  paypal = await  pool.request()
            .input('paypalId', sql.Int, paypalId)
            .query(getQuery("./sql/deletePaypal.sql"));
        return  paypal.recordsets;
    }
    catch (error) {
        console.log(error);
        return []
    }
}

async  function  addPaypal(paypal) {
    console.log(paypal)
    try {
        let  pool = await  sql.connect(config);
        let  insertPaypal = await  pool.request()
            .input('Paypal', sql.NVarChar, paypal.Paypal)
            .input('idUser', sql.Int, paypal.idUser)
            .query(getQuery('./sql/addPaypal.sql'));
        return  insertPaypal.recordsets;
    }
    catch (err) {
        console.log(err);
        return []
    }
}

async  function  updatePaypal(paypalId, paypal) {
    console.log(paypalId, paypal);
    try {
        let  pool = await  sql.connect(config);
        let  insertPaypal = await  pool.request()
            .input('paypalId', sql.Int, paypalId)
            .input('Paypal', sql.NVarChar, paypal.Paypal)
            .input('idUser', sql.Int, paypal.idUser)
            .query(getQuery('./sql/updatePaypal.sql'));
        return  insertPaypal.recordsets;
    }
    catch (err) {
        console.log(err);
        return []
    }
}

module.exports = {
    getPaypals:  getPaypals,
    getPaypal:  getPaypal,
    addPaypal:  addPaypal,
    updatePaypal: updatePaypal,
    deletePaypal: deletePaypal
}