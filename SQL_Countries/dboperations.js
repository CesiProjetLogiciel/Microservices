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

async  function  getCountries(params) {
    try {
        console.log(params)
        let  pool = await  sql.connect(config);
        let  country = await  pool.request()
            .query(getQuery('./sql/getCountries.sql'));
        return  country.recordsets;
    }
    catch (error) {
        console.log(error);
        return []
    }
}

async  function  getCountry(countryId) {
    try {
        let  pool = await  sql.connect(config);
        let  country = await  pool.request()
            .input('countryId', sql.Int, countryId)
            .query(getQuery("./sql/getCountry.sql"));
        return  country.recordsets[0];
    }
    catch (error) {
        console.log(error);
        return []
    }
}

async  function  deleteCountry(countryId) {
    try {
        let  pool = await  sql.connect(config);
        let  country = await  pool.request()
            .input('countryId', sql.Int, countryId)
            .query(getQuery("./sql/deleteCountry.sql"));
        return  country.recordsets;
    }
    catch (error) {
        console.log(error);
        return []
    }
}

async  function  addCountry(country) {
    console.log(country)
    try {
        let  pool = await  sql.connect(config);
        let  insertCountry = await  pool.request()
            .input('PhoneCountryCode', sql.NVarChar, country.PhoneCountryCode)
            .input('Name', sql.NVarChar, country.Name)
            .query(getQuery('./sql/addCountry.sql'));
        return  insertCountry.recordsets;
    }
    catch (err) {
        console.log(err);
        return []
    }
}

async  function  updateCountry(countryId, country) {
    try {
        let  pool = await  sql.connect(config);
        let  insertCountry = await  pool.request()
            .input('countryId', sql.Int, countryId)
            .input('PhoneCountryCode', sql.NVarChar, country.PhoneCountryCode)
            .input('Name', sql.NVarChar, country.Name)
            .query(getQuery('./sql/updateCountry.sql'));
        return  insertCountry.recordsets;
    }
    catch (err) {
        console.log(err);
        return []
    }
}

module.exports = {
    getCountries:  getCountries,
    getCountry:  getCountry,
    addCountry:  addCountry,
    updateCountry: updateCountry,
    deleteCountry: deleteCountry
}