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

async  function  getAddresses(params) {
    try {
        console.log(params)
        let  pool = await  sql.connect(config);
        let  paypals = await  pool.request()
            .input('idUsers', sql.Int, params.idUsers)
            .query(getQuery('./sql/getAddresses.sql'));
        return  paypals.recordsets;
    }
    catch (error) {
        console.log(error);
        return []
    }
}

async  function  getAddress(addressId) {
    try {
        let  pool = await  sql.connect(config);
        let  address = await  pool.request()
            .input('addressId', sql.Int, addressId)
            .query(getQuery("./sql/getAddress.sql"));
        return  address.recordsets;
    }
    catch (error) {
        console.log(error);
        return []
    }
}

async  function  deleteAddress(addressId) {
    try {
        let  pool = await  sql.connect(config);
        let  addre = await  pool.request()
            .input('addressId', sql.Int, addressId)
            .query(getQuery("./sql/deleteAddress.sql"));
        return  addre.recordsets;
    }
    catch (error) {
        console.log(error);
        return []
    }
}

async  function  addAddress(address) {
    console.log(address)
    try {
        let  pool = await  sql.connect(config);
        let  insertAddress = await  pool.request()
            .input('Zipcode', sql.NVarChar, address.Zipcode)
            .input('City', sql.NVarChar, address.City)
            .input('Address', sql.NVarChar, address.Address)
            .input('State', sql.NVarChar, address.State)
            .input('AdditionnalInfo', sql.NVarChar, address.AdditionnalInfo)
            .input('Lastname', sql.NVarChar, address.Lastname)
            .input('Firstname', sql.NVarChar, address.Firstname)
            .input('PhoneNumber', sql.NVarChar, address.PhoneNumber)
            .input('PhoneCountryCode', sql.NVarChar, address.PhoneCountryCode)
            .input('idCountry', sql.Int, address.idCountry)
            .input('idUser', sql.Int, address.idUser)
            .query(getQuery('./sql/addAddress.sql'));
        return  insertAddress.recordsets;
    }
    catch (err) {
        console.log(err);
        return []
    }
}

async  function  updateAddress(addressId, address) {
    try {
        let  pool = await  sql.connect(config);
        let  updateAddress = await  pool.request()
            .input('addressId', sql.Int, addressId)
            .input('Zipcode', sql.NVarChar, address.Zipcode)
            .input('City', sql.NVarChar, address.City)
            .input('Address', sql.NVarChar, address.Address)
            .input('State', sql.NVarChar, address.State)
            .input('AdditionnalInfo', sql.NVarChar, address.AdditionnalInfo)
            .input('Lastname', sql.NVarChar, address.Lastname)
            .input('Firstname', sql.NVarChar, address.Firstname)
            .input('PhoneNumber', sql.NVarChar, address.PhoneNumber)
            .input('PhoneCountryCode', sql.NVarChar, address.PhoneCountryCode)
            .input('idCountry', sql.Int, address.idCountry)
            .input('idUser', sql.Int, address.idUser)
            .query(getQuery('./sql/updateAddress.sql'));
        return  updateAddress.recordsets;
    }
    catch (err) {
        console.log(err);
        return []
    }
}

module.exports = {
    getAddresses:  getAddresses,
    getAddress:  getAddress,
    addAddress:  addAddress,
    updateAddress: updateAddress,
    deleteAddress: deleteAddress
}