require('dotenv').config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require('nodemailer')

const server = express();
server.use(cors());
server.use(express.json());
server.use(bodyParser.json());
server.use(express.static(process.env.PUBLIC_DIR))
server.post('/sendEmail', async (req, res) => {
    let config = {
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        secure: true,
        auth: {
            user: process.env.MAIL_UID,
            pass: process.env.MAIL_SKEY
        }
    };

    let transport = nodemailer.createTransport(config)
    const recipientName = req.body.name;
    const recipientEmail = req.body.email;
    const recipientPhone = req.body.phone;
    const recipientMessage = req.body.message;
    const html = `
    <table style=font-family:Arial,sans-serif;background-color:#f4f4f4;border-collapse:collapse;max-width:400px><tr><td style="background-color:#fff;border:1px solid #ccc;padding:20px"><strong>Name</strong><td style="background-color:#fff;border:1px solid #ccc;padding:20px">${recipientName}<tr><td style="background-color:#fff;border:1px solid #ccc;padding:20px"><strong>Email:</strong><td style="background-color:#fff;border:1px solid #ccc;padding:20px">${recipientEmail}<tr><td style="background-color:#fff;border:1px solid #ccc;padding:20px"><strong>Phone Number:</strong><td style="background-color:#fff;border:1px solid #ccc;padding:20px">${recipientPhone}<tr><td style="background-color:#fff;border:1px solid #ccc;padding:20px"><strong>Message:</strong><td style="background-color:#fff;border:1px solid #ccc;padding:20px;max-height:200px;overflow-y:auto">${recipientMessage}</table>
    `
    let message = {
        from: process.env.MAIL_UID,
        to: process.env.MAIL_CLIENT,
        subject: `Contact Us Form Submission - ${ recipientName }`,
        html: html
}

    transport.sendMail(message).then(() => {
    // Thank You for Contacting Us!
    return res.status(201).json({ msg: "We have received your message and will get back to you shortly." })
}).catch((err) => {
    // Service Temporarily Unavailable
    return res.status(500).json({ err: "We apologize for the inconvenience, but our service is currently down for maintenance."})
})
})

server.listen(process.env.SERVER_PORT);