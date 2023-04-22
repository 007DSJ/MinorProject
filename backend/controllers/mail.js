const nodemailer = require("nodemailer");

const mail = async (req, res) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'fred93@ethereal.email',
            pass: 'YJzndmG91vuFzFESa1'
        }
    });

    let info = await transporter.sendMail({
        from: '"Pack&Move" <service@packandmove.com>', // sender address
        to: "customer@email.com", // list of receivers
        subject: "About your P&M enquiry", // Subject line
        text: "Hey there, hope you are well...", // plain text body
        //html: "<b>Hello world?</b>", // html body
    });

    res.send('Done!')
}

module.exports = mail;