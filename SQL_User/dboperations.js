const  config = require('./dbconfig');
const  sql = require('mssql');
const fs = require('fs');

function getQuery(sqlFile){
    try {
        const data = fs.readFileSync(sqlFile, 'utf8');
        return data;
    } catch (err) {
        console.error(err);
    }
}

async  function  getUsers() {
    try {
        let  pool = await  sql.connect(config);
        let  users = await  pool.request().query(getQuery('./sql/getUsers.sql'));
        return  users.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async  function  getUser(userId) {
    try {
        let userEmail = '';
        if (isNaN(parseInt(userId)))
        {
            userEmail = userId
            userId = -1
        }
        let  pool = await  sql.connect(config);
        let  user = await  pool.request()
            .input('userId', sql.Int, userId)
            .input('userEmail', sql.NVarChar, userEmail)
            .query(getQuery("./sql/getUser.sql"));
        return  user.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async  function  deleteUser(userId) {
    try {
        let userEmail = '';
        if (isNaN(parseInt(userId)))
        {
            userEmail = userId
            userId = -1
        }
        let  pool = await  sql.connect(config);
        let  user = await  pool.request()
            .input('userId', sql.Int, userId)
            .input('userEmail', sql.NVarChar, userEmail)
            .query(getQuery("./sql/deleteUser.sql"));
        return  user.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async  function  addUser(user) {
    user.isSuspended = user.isSuspended != null
    console.log(user)
    try {
        let  pool = await  sql.connect(config);
        let  insertUser = await  pool.request()
            .input('Lastname', sql.NVarChar, user.Lastname)
            .input('Firstname', sql.NVarChar, user.Firstname)
            .input('Pass', sql.NVarChar, user.Pass)
            .input('isSuspended', sql.Bit, user.isSuspended)
            .input('Email', sql.NVarChar, user.Email)
            .input('Type', sql.NVarChar, user.Type)
            .query(getQuery('./sql/addUser.sql'));
        return  getUser(user.Email);
    }
    catch (err) {
        console.log(err);
    }
}

async  function  updateUser(userId, user) {
    try {
        let userEmail = '';
        if (isNaN(parseInt(userId)))
        {
            userEmail = userId
            userId = -1
        }

        let  pool = await  sql.connect(config);
        let  insertUser = await  pool.request()
            .input('userId', sql.Int, userId)
            .input('userEmail', sql.NVarChar, userEmail)
            .input('Lastname', sql.NVarChar, user.Lastname)
            .input('Firstname', sql.NVarChar, user.Firstname)
            .input('Pass', sql.NVarChar, user.Pass)
            .input('isSuspended', sql.Bit, user.isSuspended)
            .input('Email', sql.NVarChar, user.Email)
            .input('Type', sql.NVarChar, user.Type)
            .query(getQuery('./sql/updateUser.sql'));
        return  getUser(userId);
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = {
    getUsers:  getUsers,
    getUser:  getUser,
    addUser:  addUser,
    updateUser: updateUser,
    deleteUser: deleteUser
}