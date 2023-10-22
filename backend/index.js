const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require('nodemailer')
const Mailgen = require('mailgen');

const server = express();

server.use(cors());
server.use(bodyParser.json());
server.use(express.json());

server.post('/sendEmail', async (req, res) => {
    const email = req.body.email
    let config = {
        service: 'gmail',
        port: 587,
        auth: {
            user: 'kurmavanshi81@gmail.com',
            pass: 'ijij mtya hcfc qczn'
        }
    };

    let transport = nodemailer.createTransport(config)

    let MailGenerator = new Mailgen({
        theme: "default",
        product: {
            name: "Mailgen",
            link: "https://mailgen.js/"
        }
    })

    let response = {
        body: {
            name: "User!",
            outro: "You are subscribed to our mails."
        }
    }

    let mail = MailGenerator.generate(response)

    let message = {
        from: "Drishti <kurmavanshi81@gmail.com>",
        to: email,
        subject: "Mail from ShreenathTransporter",
        html: mail
    }

    transport.sendMail(message).then(() => {
        return res.status(201).json({ msg: 'you should receive an email' })
    }).catch((err) => {
        return res.status(500).json({ err })
    })
})

server.listen(8080, () => {
    console.log("server started at port 8080");
});