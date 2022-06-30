const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const nodeMailer = require('nodemailer');

module.exports = router;

// add timestamps in front of log messages
require('console-stamp')(console, '[HH:MM:ss.l]');
router.use((request, response, next) => {
    console.log(`${request.method} ${request.url} - ${request.ip}`);
    next();
});

let transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secureConnection: false,
    auth: {
        user: process.env.MAIL_ADDRESS,
        pass: process.env.MAIL_PASSWORD
    },
    tls: {
        ciphers: 'SSLv3'
    }
});

function sendEmail(body){
    let mailOptions = {
        from: '"NOREPLY" <' + process.env.MAIL_ADDRESS + '>', // sender address
        to: req.body.to, // list of receivers
        subject: req.body.subject, // Subject line
        text: req.body.body, // plain text body
        html: '<b>'+req.body.body+'</b>' // html body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });
}

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

function sendMessage(body){
    return client.messages
        .create({
            body: body.body,
            from: process.env.TWILIO_NUMBER,
            to: body.phonenumber
        })
        .then(message => {console.log(message.sid); return 200;});
}

router
.post('/notifications/users', async (req, res) => {
    console.log(req.body);
    try {
        // sendEmail(req.body);
        const status = await sendMessage(req.body)
        res.sendStatus(status);
    }
    catch (error) {
        console.log(error.message);
        res.status(400).json({ message: error.message })
    }
})
.post('/notifications/restaurant', async (req, res) => {
    console.log(req.body);
    try {
        //TODO notifs restaurants
        res.sendStatus(200);
    }
    catch (error) {
        console.log(error.message);
        res.status(400).json({ message: error.message })
    }
})
.post('/notifications/deliveryman', async (req, res) => {
    console.log(req.body);
    try {
        //TODO notifs restaurants
        res.sendStatus(200);
    }
    catch (error) {
        console.log(error.message);
        res.status(400).json({ message: error.message })
    }
})