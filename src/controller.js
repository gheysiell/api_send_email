const config = require('./configs')
const nodemailer = require('nodemailer')

const welcome = (req, res) => {
    res.sendStatus(200)
    res.json({"message": "welcome to my back-end"})    
}

const send_email = (req, res) => {
    var qtdPass = 5
    var sender = nodemailer.createTransport({
        host: 'smtp-mail.outlook.com',
        service: 'smtp-mail.outlook.com',
        port: 587,
        secure: false,
        auth: {
            user: config.email_sender,
            pass: config.password_sender
        }
    })

    var message = {
        from: config.email_sender,
        to: config.email_recipient,
        subject: 'Passagens com CST 100',
        text: 'Total de passagens com CST 100',
        html:   `<div style='text-align: center; width: 100%; height: 140px; color: #52E5ED; background: #303843; border-radius: 10px; font-family: "Google Sans",Roboto,RobotoDraft,Helvetica,Arial,sans-serif;'>
                    <h1 style='padding: 8px 0 18px 0; margin: 0;'>WINBPE-WEB</h1>
                    <h3 style='padding: 0 0 18px 0; margin: 0;'>Um total de ${qtdPass} passagens com CST 100 foram emitidas.</h3>
                    <h5 style='padding: 10px 0 0 0; margin: 0; color: #fff;'>powered by sicaf systems</h5>
                </div>`
    }
    
    sender.sendMail(message, err => {    
        if (err) {
            res.status(404)
            res.json({"message": err})            
        } else {
            res.status(200)
            res.json({"message": "email successfully sent."})            
        }
    })
}

module.exports = {
    welcome,
    send_email
}