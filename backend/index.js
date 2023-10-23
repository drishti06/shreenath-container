require('dotenv').config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require('nodemailer')
const Mailgen = require('mailgen');

const server = express();

server.use(cors());
server.use(express.json());
server.use(bodyParser.json());
server.use(express.static(process.env.PUBLIC_DIR))

server.post('/sendEmail', async (req, res) => {
    const email = req.body.email
    let config = {
        host: process.env.HOST,
        port: process.env.GMAIL_PORT,
        auth: {
            user: process.env.GMAIL_ID,
            pass: process.env.GMAIL_PASSWORD
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
        from: process.env.EMAIL_ID,
        to: email,
        subject: "Hello ✔",
        html: mail
    }

    transport.sendMail(message).then(() => {
        return res.status(201).json({ msg: 'you should receive an email' })
    }).catch((err) => {
        return res.status(500).json({ err })
    })
})

server.listen(process.env.SERVER_PORT, () => {
    console.log(`Server started at port ${process.env.SERVER_PORT}`);
});