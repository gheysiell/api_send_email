const config = require('./configs')
const nodemailer = require('nodemailer')

const welcome = (req, res) => {
    res.json({"message": "welcome to my back-end", "email_sender": config.email_sender,  "email_recipient": config.email_recipient})
    res.status(200)
}

const send_email = (req, res) => {
    var qtdPass = req.params.qtd_pass
    var sender = nodemailer.createTransport({
        host: 'smtp.gmail.com', // smtp-mail.outlook.com
        port: 587,
        secure: false, // true for 465, false for other ports
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
        html:   `<!doctype html>
                    <html>
                        <head>
                            <meta charset="utf-8">
                        </head>
                        <body>
                            <div style='justify-content: center; align-items: center; text-align: center; width: 100%; height: 100px; color: #52E5ED; background: #303843; border-radius: 10px; font-family: "Google Sans",Roboto,RobotoDraft,Helvetica,Arial,sans-serif;'>
                                <h2 style='padding: 5px 0 13px 0; margin: 0;'>WINBPE-WEB</h2>                                
                                <h4 style='padding: 0 0 12px 0; margin: 0;'>Um total de ${qtdPass} passagens com CST 100 foram emitidas.</h4>
                                <h5 style='padding: 5px 0 0 0; margin: 0; color: #fff;'>sicaf systems</h5>
                            </div>
                        </body>
                    </html>`
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