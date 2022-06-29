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

async  function  getUserTypes(params) {
    try {
        console.log(params)
        let  pool = await  sql.connect(config);
        let  userTypes = await  pool.request()
            .query(getQuery('./sql/getUserTypes.sql'));
        return  userTypes.recordsets;
    }
    catch (error) {
        console.log(error);
        return []
    }
}

async  function  getUserType(userTypeId) {
    try {
        let  pool = await  sql.connect(config);
        let  userType = await  pool.request()
            .input('userTypeId', sql.Int, userTypeId)
            .query(getQuery("./sql/getUserType.sql"));
        return  userType.recordsets[0];
    }
    catch (error) {
        console.log(error);
        return []
    }
}

async  function  deleteUserType(userTypeId) {
    try {
        let  pool = await  sql.connect(config);
        let  userType = await  pool.request()
            .input('userTypeId', sql.Int, userTypeId)
            .query(getQuery("./sql/deleteUserType.sql"));
        return  userType.recordsets;
    }
    catch (error) {
        console.log(error);
        return []
    }
}

async  function  addUserType(userType) {
    console.log(userType)
    try {
        let  pool = await  sql.connect(config);
        let  insertUserType = await  pool.request()
            .input('Type', sql.NVarChar, userType.Type)
            .query(getQuery('./sql/addUserType.sql'));
        return  insertUserType.recordsets;
    }
    catch (err) {
        console.log(err);
        return []
    }
}

async  function  updateUserType(userTypeId, userType) {
    try {
        let  pool = await  sql.connect(config);
        let  insertUserType = await  pool.request()
            .input('userTypeId', sql.Int, userTypeId)
            .input('Type', sql.NVarChar, userType.Type)
            .query(getQuery('./sql/updateUserType.sql'));
        return  insertUserType.recordsets;
    }
    catch (err) {
        console.log(err);
        return []
    }
}

module.exports = {
    getUserTypes:  getUserTypes,
    getUserType:  getUserType,
    addUserType:  addUserType,
    updateUserType: updateUserType,
    deleteUserType: deleteUserType
}