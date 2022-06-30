const  config = require('./dbconfig');
const  sql = require('mssql');
const  Db = require('./dboperations');
const  express = require('express');
const  bodyParser = require('body-parser');
const  cors = require('cors');
const  app = express();
const  router = express.Router();
// add timestamps in front of log messages
require('console-stamp')(console, '[HH:MM:ss.l]');

app.use(bodyParser.urlencoded({ extended:  true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/', router);

router.use((request, response, next) => {
    console.log(`${request.method} ${request.url} - ${request.ip}`);
    next();
});

router.route('/users')
    .get((request, response) => {
        Db.getUsers().then((data) => {
            if (data[0].length)
                response.status(200).json(data[0]);
            else
                response.sendStatus(404)
        })
    })
    .post((request, response) => {
        let  user = { ...request.body }
        Db.addUser(user).then(data  => {
            if (data.length)
                response.status(201).json(data[0]);
            else
                response.sendStatus(400)
        })
    })

router.route('/users/:id')
    .get((request, response) => {
        Db.getUser(request.params.id).then((data) => {
            if (data.length)
                response.status(200).json(data[0]);
            else
                response.sendStatus(404)
        })
    })
    .put((request, response) => {
        let  user = { ...request.body }
        Db.updateUser(request.params.id, user).then(data  => {
            if (data.length)
                response.status(201).json(data[0]);
            else
                response.sendStatus(404)
        })
    })
    .delete((request, response) => {
        Db.deleteUser(request.params.id).then(data  => {
            if (data[0].length)
                response.status(201).json(data[0]);
            else
                response.sendStatus(404)
        })
    })

const port = process.env.PORT || 8080;
try {
    app.listen(port);
    console.log('Users API is runnning at ' + port);
    let connectbdd = async function() {let  pool = await sql.connect(config); return pool}
    connectbdd().then(r => console.log('Connection to MS SQL Server operational'));
}
catch (e) {
    console.log(e.message);
}
